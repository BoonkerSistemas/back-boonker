import { Injectable } from '@nestjs/common';
import { CreateProjectHouseDto } from './dto/create-project-house.dto';
import { UpdateProjectHouseDto } from './dto/update-project-house.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectHouse, ProjectHouseDocument } from './schema/project-house.schema';
import { EmailService } from '../service/email.service';

@Injectable()
export class ProjectHouseService {
  constructor(
    @InjectModel(ProjectHouse.name) private projectHouseModel: Model<ProjectHouseDocument>,
    private sentEmail: EmailService
  ) {
  }

  async create(createProjectHouseDto: CreateProjectHouseDto) {
    try {
      try {
        return await this.projectHouseModel.create(createProjectHouseDto);
      } catch (e) {
        //////console.log(e);
      }

    } catch (e) {
      //////console.log(e);
    }
  }

  findAll() {
    return `This action returns all projectHous ssse`;
  }

  async findOne(id: string) {

    let find: any = await this.projectHouseModel.findOne({ _id: id.toString() });
    find.active = true;
    await this.projectHouseModel.updateOne({ _id: id }, find);

    await this.sentEmail.sendComment(find)
    return find;

  }

  async findPerson(id: string) {

    let find: any = await this.projectHouseModel.findOne({ _id: id.toString() });

    return find;

  }

  update(id: string, updateProjectHouseDto: UpdateProjectHouseDto) {

    return this.projectHouseModel.findOneAndUpdate({ _id: id }, updateProjectHouseDto, {
      new: true,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} projectHouse`;
  }

}
