import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BoonkerIntWarehouseReal, BoonkerIntWarehouseRealDocument } from './schema/boonker-int-warehouse-real.schema';
import { CreateBoonkerIntWarehouseRealDto } from './dto/create-boonker-int-warehouse-real.dto';
import { UpdateBoonkerIntWarehouseRealDto } from './dto/update-boonker-int-warehouse-real.dto';
@Injectable()
export class BoonkerIntWarehouseRealService {

  constructor(
    @InjectModel(BoonkerIntWarehouseReal.name) private readonly permissionModel: Model<BoonkerIntWarehouseRealDocument>,
  ) {}

  async create(createRegionDto: CreateBoonkerIntWarehouseRealDto): Promise<BoonkerIntWarehouseReal> {
    return this.permissionModel.create(createRegionDto);
  }

  async findAll(): Promise<BoonkerIntWarehouseRealDocument[]> {
    return this.permissionModel.find().exec();
  }

  async findOne(id: string): Promise<BoonkerIntWarehouseRealDocument> {
    return this.permissionModel.findOne({ _id: id }).exec();
  }

  async findOneProject(id: string): Promise<BoonkerIntWarehouseRealDocument> {
    return this.permissionModel.findOne({ project: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateBoonkerIntWarehouseRealDto): Promise<BoonkerIntWarehouseRealDocument> {
    return this.permissionModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.permissionModel.findByIdAndDelete({ _id: id }).exec();
  }
}
