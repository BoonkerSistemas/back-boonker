import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SpareProduct, SpareProductDocument } from './schema/spare-product.schema';
import { CreateSpareProductDto } from './dto/create-spare-product.dto';
import { UpdateSpareProductDto } from './dto/update-spare-product.dto';

@Injectable()
export class SpareProductService {
  constructor(
    @InjectModel(SpareProduct.name) private projectModel: Model<SpareProductDocument>,
  ) {
  }

  async create(createRegionDto: CreateSpareProductDto): Promise<any> {
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

  async update(id: string, updateRegionDto: UpdateSpareProductDto): Promise<any> {
    return this.projectModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.projectModel.findByIdAndDelete({ _id: id }).exec();
  }


}
