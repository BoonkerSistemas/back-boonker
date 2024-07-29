import { Injectable } from '@nestjs/common';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { CreateProjectDto } from './dto/create-proyect.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Project, ProjectDocument } from './schema/proyect.schema';
import { ClientService } from '../client/client.service';
import { ModulesService } from '../modules/modules.service';
import { PurchaseOrderService } from '../purchase-order/purchase-order.service';

@Injectable()
export class ProyectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
    private clientService: ClientService,
    private modulesService: ModulesService,
    private purchaseOrder: PurchaseOrderService,
  ) {
  }

  async create(createRegionDto: CreateProjectDto): Promise<any> {
    try {


      let project = await this.projectModel.create(createRegionDto);
      const projectId = (project._id as Types.ObjectId).toHexString();

      for (let i = 0; i < createRegionDto.modules; i++) {
        let modules = {
          module: (i + 1).toString(),
          project: projectId,
          startDate: project.startDate,
          active: project.active,
        };
        let aux = project.module;
        let module = await this.modulesService.create(modules);
        let mod = module._id.toHexString();
        aux.push(mod.toString());

        project.module = aux;

        await this.projectModel.findOneAndUpdate({ _id: project._id }, project, {
          new: true,
        });
      }
      return project;

    } catch (e) {
      //////console.log(e);
    }


  }

  async findAllActive(status: string) {
    let valueStatus = status;
    let status2;
    if (valueStatus === 'true') {
      status2 = true;
    } else {
      status2 = false;
    }
    let projects = await this.projectModel.find({ active: status2 });
    //////console.log("aqui",projects)
    for (const item of projects) {
      //////console.log("88888888328328382382832838238283",item)
      let client = await this.clientService.findRuc(item.ruc);

      //////console.log(client)

      item.ruc = client.name + ' ' + client.lastName;
      item.client = client;
    }


    return projects;
  }

  async findActiveStatusId(status) {

    let projects = await this.projectModel.find({ $and: [{ active: true }, { status: status }] });
    for (const item of projects) {
      let client = await this.clientService.findRuc(item.ruc);

      item.ruc = client.name + ' ' + client.lastName;
      item.client = client;
    }

    //////console.log(projects);

    return projects;
  }

  async findStatusId(id) {

    let projects = await this.projectModel.find({ ruc: id });
    for (const item of projects) {
      let client = await this.clientService.findRuc(item.ruc);

      item.ruc = client.name + ' ' + client.lastName;
      item.client = client;
    }

    return projects;
  }

  async findAll(): Promise<any[]> {

    return await this.projectModel.find({ active: true }).exec();
  }

  async findByClient(id: string): Promise<any> {
    let purchase = [];
    //////console.log(id)
    let client = await this.clientService.findUsername(id);
    //////console.log(client)
    let projects = await this.projectModel.find({ ruc: client.ruc }).exec();

    for (const item of projects) {
      let client = await this.clientService.findRuc(item.ruc);

      item.ruc = client.name + ' ' + client.lastName;
      item.client = client;

      for (const item2 of item.module) {
        //////console.log(item2);
        let module = await this.modulesService.findOne(item2);
        //////console.log(module);
        purchase.push(module);
      }
      item.module = purchase;

    }

    return projects;

  }

  async findOne(id: string): Promise<any> {
    console.log(id)
    let purchase = [];
    let projects = await this.projectModel.findOne({ _id: id }).exec();

    //console.log(projects.ruc)
    let client = await this.clientService.findRuc(projects.ruc);

    //console.log(client)

    projects.ruc = client?.name + ' ' + client?.lastName;

    projects.client = client? client: "";

    for (const item of projects.module) {

      let module = await this.modulesService.findOne(item);

      purchase.push(module);
    }
    projects.module = purchase;
    return projects;

  }


  async findOneDocument(id: string, document: string): Promise<any> {
    //////console.log(id, document);
    if (document === 'Disenos') {
      document = 'Diseños';
    }
    if (document === 'Garantias') {
      document = 'Garantías';
    }

    let purchase = [];
    let projects = await this.projectModel.findOne({ _id: id }).exec();
    let client = await this.clientService.findRuc(projects.ruc);

    projects.ruc = client.name + ' ' + client.lastName;
    projects.client = client;

    for (const item of projects.module) {
      let module = await this.modulesService.findOne(item);
      purchase.push(module);
    }
    projects.module = purchase;
    let aux;
    //////console.log();
    aux = projects.documentationProject.filter((data: any) => data.type === document);

    //////console.log(aux);

    if (aux) {
      projects.documentationProject = aux;
    } else {
      projects.documentationProject = [];
    }
    return projects.documentationProject;

  }

  async update(id: string, updateRegionDto: UpdateProyectDto): Promise<any> {
    return this.projectModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    //console.log(id)
    return this.projectModel.findByIdAndDelete({ _id: id }).exec();
  }


}
