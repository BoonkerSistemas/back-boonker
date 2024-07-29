import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Permission} from "./schema/permission.schema";

@Injectable()
export class PermissionService {
  constructor(
      @InjectModel(Permission.name) private readonly permissionModel: Model<Permission>,
  ) {}

  async create(createRegionDto: CreatePermissionDto): Promise<Permission> {
    return this.permissionModel.create(createRegionDto);
  }

  async findAll(): Promise<Permission[]> {
    return this.permissionModel.find().exec();
  }

  async findOne(id: string): Promise<Permission> {
    return this.permissionModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdatePermissionDto): Promise<Permission> {
    return this.permissionModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.permissionModel.findByIdAndDelete({ _id: id }).exec();
  }
}
