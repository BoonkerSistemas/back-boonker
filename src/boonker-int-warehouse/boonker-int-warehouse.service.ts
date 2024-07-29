import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBoonkerIntWarehouseDto } from './dto/create-boonker-int-warehouse.dto';
import { UpdateBoonkerIntWarehouseDto } from './dto/update-boonker-int-warehouse.dto';
import { BoonkerIntWarehouse, BoonkerIntWarehouseDocument } from './schema/boonker-int-warehouse.schema';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BoonkerIntWarehouseService {

  constructor(private configService: ConfigService,
              @InjectModel(BoonkerIntWarehouse.name) private readonly permissionModel: Model<BoonkerIntWarehouseDocument>,
  ) {
  }

  async create(createRegionDto: CreateBoonkerIntWarehouseDto): Promise<BoonkerIntWarehouseDocument> {
    return this.permissionModel.create(createRegionDto);
  }

  async findAll(): Promise<void> {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: this.configService.getOrThrow('CONTIFICO') + '/api/v1/bodega',
      headers: {
        'Authorization': this.configService.getOrThrow('KEY'),
      },
      data: '',
    };
    let data: any;
    await axios.request(config)
      .then((response) => {
        data = response.data;
      })
      .catch((error) => {
        data = error;
      });
    return data;

  }

  async findOne(id: string): Promise<BoonkerIntWarehouseDocument> {
    return this.permissionModel.findOne({ _id: id }).exec();
  }

  async findOneProject(id: string): Promise<BoonkerIntWarehouseDocument> {
    return this.permissionModel.findOne({ project: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateBoonkerIntWarehouseDto): Promise<BoonkerIntWarehouseDocument> {
    return this.permissionModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.permissionModel.findByIdAndDelete({ _id: id }).exec();
  }


}
