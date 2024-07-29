import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBoonkerIntWarehouseIncomeDto } from './dto/create-boonker-int-warehouse-income.dto';
import { UpdateBoonkerIntWarehouseIncomeDto } from './dto/update-boonker-int-warehouse-income.dto';
import {
  BoonkerIntWarehouseIncome,
  BoonkerIntWarehouseIncomeDocument,
} from './schema/boonker-int-warehouse-income.schema';
import axios from 'axios';

@Injectable()
export class BoonkerIntWarehouseIncomeService {

  constructor(
    @InjectModel(BoonkerIntWarehouseIncome.name) private readonly permissionModel: Model<BoonkerIntWarehouseIncomeDocument>,
  ) {
  }

  async create(createRegionDto: CreateBoonkerIntWarehouseIncomeDto): Promise<BoonkerIntWarehouseIncome> {
    return this.permissionModel.create(createRegionDto);
  }

  async findAll(): Promise<BoonkerIntWarehouseIncomeDocument[]> {
    return this.permissionModel.find().exec();
  }

  async findOne(id: string): Promise<BoonkerIntWarehouseIncomeDocument> {
    return this.permissionModel.findOne({ _id: id }).exec();
  }

  async findOneProject(id: string): Promise<BoonkerIntWarehouseIncomeDocument> {
    return this.permissionModel.findOne({ project: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateBoonkerIntWarehouseIncomeDto): Promise<BoonkerIntWarehouseIncomeDocument> {
    return this.permissionModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.permissionModel.findByIdAndDelete({ _id: id }).exec();
  }

  integrateContifico() {
    let data = {};


    axios.post('/user', data)
      .then(function(response) {
        //console.log(response);
      })
      .catch(function(error) {
        //console.log(error);
      });
  }
}
