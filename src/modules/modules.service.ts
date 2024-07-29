import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Modules, ModulesDocument } from './schema/module.schema';
import { PurchaseOrderService } from '../purchase-order/purchase-order.service';

@Injectable()
export class ModulesService {
  constructor(
    @InjectModel(Modules.name) private projectModel: Model<ModulesDocument>,
    private purchase: PurchaseOrderService,
  ) {
  }

  async create(createRegionDto: CreateModuleDto): Promise<any> {
    try {

      return this.projectModel.create(createRegionDto);


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
    return await this.projectModel.find({ active: status2 });
  }

  async findAll(): Promise<any[]> {

    return await this.projectModel.find({ active: true }).exec();
  }


  async findOne(id: string): Promise<any> {
    let purchase = [];
    let module = await this.projectModel.findOne({ _id: id }).exec();
    //////console.log(module);

    let order: any = await this.purchase.findAllActiveByModule(id);

    purchase.push(order);
    let job = purchase[0]
    job.sort((a, b) =>a.section[0].titulo.localeCompare(b.section[0].titulo));
    module.purchaseOrder = purchase

    return module;
  }

  async findOneProject(id: string): Promise<any> {
    return await this.projectModel.find({ project: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateModuleDto): Promise<any> {
    return this.projectModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.projectModel.findByIdAndDelete({ _id: id }).exec();
  }


}
