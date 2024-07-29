import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseOrder, PurchaseOrderDocument } from './schema/purchase-order.schema';

import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Injectable()
export class PurchaseOrderService {
  constructor(
    @InjectModel(PurchaseOrder.name) private projectModel: Model<PurchaseOrderDocument>,
  ) {
  }

  async create(createRegionDto: CreatePurchaseOrderDto): Promise<any> {
    try {

      let order = await this.projectModel.create(createRegionDto);
      /*let module = await this.module.findOne(createRegionDto.module);
      if (module) {

        let mod = order._id.toHexString();
        let aux = module.purchaseOrder

        aux.push(mod.toString())
        module.purchaseOrder = aux


        await this.module.update(createRegionDto.module, module);

      }*/
      return order;


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
    return this.projectModel.find({ active: status2 });
  }

  async findAllActiveByModule(module: string) {

    return this.projectModel.find({ $and: [{ active: true }, { module: module }] });
  }

  async findAll(): Promise<any[]> {

    return await this.projectModel.find({ active: true }).exec();
  }


  async findOrderProject(order): Promise<any[]> {

    return await this.projectModel.find({ module: order }).exec();
  }


  async findOne(id: string): Promise<any> {
    //////console.log(id);
    return this.projectModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdatePurchaseOrderDto): Promise<any> {
    return this.projectModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.projectModel.findByIdAndDelete({ _id: id }).exec();
  }


}
