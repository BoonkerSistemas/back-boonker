import { Injectable } from '@nestjs/common';
import { CreateFutureSendProyectDto } from './dto/create-future-send-proyect.dto';
import { UpdateFutureSendProyectDto } from './dto/update-future-send-proyect.dto';

@Injectable()
export class FutureSendProyectService {
  create(createFutureSendProyectDto: CreateFutureSendProyectDto) {
    return 'This action adds a new futureSendProyect';
  }

  findAll() {
    return `This action returns all futureSendProyect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} futureSendProyect`;
  }

  update(id: number, updateFutureSendProyectDto: UpdateFutureSendProyectDto) {
    return `This action updates a #${id} futureSendProyect`;
  }

  remove(id: number) {
    return `This action removes a #${id} futureSendProyect`;
  }
}
