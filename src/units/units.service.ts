import { Injectable } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Units, UnitsDocument } from './schema/unit.schema';
import { ClientService } from '../client/client.service';


@Injectable()
export class UnitsService {

  constructor(
    @InjectModel(Units.name) private projectModel: Model<UnitsDocument>,
    private clientService: ClientService,
  ) {
  }
  async create(createRegionDto: CreateUnitDto): Promise<any> {
    try {


      return await this.projectModel.create(createRegionDto);

    } catch (e) {
      //////console.log(e);
    }


  }



  async findByClient(id: string, project: string): Promise<any> {

    return await this.projectModel.find({
      $and: [
        { ruc: id },
        { project: project },
      ],
    }).exec();

  }

  async findOne(id: string): Promise<any> {
    let purchase = [];
    return await this.projectModel.findOne({ _id: id }).exec();

  }

  async findOneDocument(id: string, document: string): Promise<any> {
    //////console.log(id, document);
    if (document === 'Disenos') {
      document = 'Diseños';
    }
    if (document === 'Garantias') {
      document = 'Garantías';
    }

    let projects = await this.projectModel.findOne({ _id: id }).exec();

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

  async update(id: string, updateRegionDto: UpdateUnitDto): Promise<any> {
    return this.projectModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.projectModel.findByIdAndDelete({ _id: id }).exec();
  }


}
