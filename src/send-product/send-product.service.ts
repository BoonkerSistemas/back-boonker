import { Injectable } from '@nestjs/common';
import { CreateSendProductDto } from './dto/create-send-product.dto';
import { UpdateSendProductDto } from './dto/update-send-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SendProduct, SendProductDocument } from './schema/send-product.schema';
import { Model } from 'mongoose';
import { OrderProduct } from '../order-product/schema/order-product.schema';

@Injectable()
export class SendProductService {
  constructor(
    @InjectModel(SendProduct.name) private projectModel: Model<SendProductDocument>,
  ) {
  }

  async create(createRegionDto: CreateSendProductDto): Promise<any> {
    try {

      let order = await this.projectModel.create(createRegionDto);

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


  async findOne(id: string): Promise<any> {
    //////console.log(id);
    return this.projectModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateSendProductDto): Promise<any> {
    return this.projectModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.projectModel.findByIdAndDelete({ _id: id }).exec();
  }

  async findOneProject(id: string): Promise<any> {
    return this.projectModel.find({ orderId: id }).exec();
  }

  async findProject(id: string): Promise<any> {
    return this.projectModel.find({ orderId: id }).exec();
  }


}
