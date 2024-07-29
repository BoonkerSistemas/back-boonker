import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Role, RoleDocument} from "./schema/role.schema";

@Injectable()
export class RoleService {
  constructor(
      @InjectModel(Role.name) private readonly roleDocumentModel: Model<RoleDocument>,
  ) {}

  async create(createRegionDto: CreateRoleDto): Promise<any> {
    let isTrue = await this.roleDocumentModel.findOne({role: createRegionDto.role}).exec();
    if (isTrue && isTrue.role.toString().toLowerCase() === createRegionDto.role.toString().toLowerCase()) {
      return {msm : "Ya existe un registro con este nombre"}
    } else {
      return this.roleDocumentModel.create(createRegionDto);
    }

  }



  async findAll(): Promise<Role[]> {
    return this.roleDocumentModel.find().exec();
  }

  findAllActive(status: string) {
    let valueStatus = status
    let status2
    if(valueStatus === "true"){
      status2 = true
    } else {
      status2 = false
    }
    return this.roleDocumentModel.find({ status: status2 });
  }

  async findOne(id: string): Promise<Role> {
    return this.roleDocumentModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateRoleDto): Promise<Role> {
    return this.roleDocumentModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.roleDocumentModel.findByIdAndDelete({ _id: id }).exec();
  }
}
