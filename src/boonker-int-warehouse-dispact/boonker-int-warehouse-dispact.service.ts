import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BoonkerIntWarehouseDispact } from './schema/boonker-int-warehouse-dispact.schema';
import { CreateBoonkerIntWarehouseDispactDto } from './dto/create-boonker-int-warehouse-dispact.dto';
import { UpdateBoonkerIntWarehouseDispactDto } from './dto/update-boonker-int-warehouse-dispact.dto';
@Injectable()
export class BoonkerIntWarehouseDispactService {

  constructor(
    @InjectModel(BoonkerIntWarehouseDispact.name) private readonly permissionModel: Model<BoonkerIntWarehouseDispact>,
  ) {}

  async create(createRegionDto: CreateBoonkerIntWarehouseDispactDto): Promise<BoonkerIntWarehouseDispact> {
    return this.permissionModel.create(createRegionDto);
  }

  async findAll(): Promise<BoonkerIntWarehouseDispact[]> {
    return this.permissionModel.find().exec();
  }

  async findOne(id: string): Promise<BoonkerIntWarehouseDispact> {
    return this.permissionModel.findOne({ _id: id }).exec();
  }

  async findOneProject(id: string): Promise<BoonkerIntWarehouseDispact> {
    return this.permissionModel.findOne({ project: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateBoonkerIntWarehouseDispactDto): Promise<BoonkerIntWarehouseDispact> {
    return this.permissionModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.permissionModel.findByIdAndDelete({ _id: id }).exec();
  }
}
