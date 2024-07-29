import { Injectable } from '@nestjs/common';
import { CreateStartEmployeDto } from './dto/create-start-employe.dto';
import { UpdateStartEmployeDto } from './dto/update-start-employe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StartEmployee, StartEmployeeDocument } from './schema/start-employe.entity';
import { UsersService } from '../users/users.service';
const moment = require('moment');


@Injectable()
export class StartEmployeService {
  constructor(
    @InjectModel(StartEmployee.name) private readonly roleDocumentModel: Model<StartEmployeeDocument>,
    private userService: UsersService,
  ) {
  }

  async create(createRegionDto: CreateStartEmployeDto): Promise<any> {

    return this.roleDocumentModel.create(createRegionDto);
  }

  async create1(data) {
    //console.log(data)
    let user = await this.userService.findOne(data.q3_escribaUna);

    let dataJson = {
      startDay: moment().format('dd MMMM yyyy'),
      hourStart: moment().format('hh:mm:ss'),
      employeeId: data.q3_escribaUna,
      employee: user.name,
      finishDay: "",
      hourFinish: "",
      hour: ""
    };
    //console.log(data);
    return this.roleDocumentModel.create(dataJson);
  }


  async findAll(): Promise<StartEmployee[]> {
    return this.roleDocumentModel.find().exec();
  }

  findAllActive(status: string) {
    let valueStatus = status;
    let status2;
    if (valueStatus === 'true') {
      status2 = true;
    } else {
      status2 = false;
    }
    return this.roleDocumentModel.find({ status: status2 });
  }

  async findOne(id: string): Promise<StartEmployee> {
    return this.roleDocumentModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateStartEmployeDto): Promise<StartEmployee> {
    return this.roleDocumentModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.roleDocumentModel.findByIdAndDelete({ _id: id }).exec();
  }
}
