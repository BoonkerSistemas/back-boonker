import { Injectable } from '@nestjs/common';
import { CreateCotaDto } from './dto/create-cota.dto';
import { UpdateCotaDto } from './dto/update-cota.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cota, CotaSchema } from './entities/cota.entity';

@Injectable()
export class CotaService {
  constructor(
    @InjectModel(Cota.name) private readonly roleDocumentModel: Model<Cota>,
  ) {
  }

  async create(createRegionDto: CreateCotaDto): Promise<any> {

    return this.roleDocumentModel.create(createRegionDto);
  }

  async create1(data) {
   let json={
     value: data
   }
   // //console.log(data);
    return this.roleDocumentModel.create(json);
  }


  async findAll(): Promise<Cota[]> {
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

  async findOne(id: string): Promise<Cota> {
    return this.roleDocumentModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateCotaDto): Promise<Cota> {
    return this.roleDocumentModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.roleDocumentModel.findByIdAndDelete({ _id: id }).exec();
  }
}
