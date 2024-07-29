import { Injectable } from '@nestjs/common';
import { CreateFutureProyectDto } from './dto/create-future-proyect.dto';
import { UpdateFutureProyectDto } from './dto/update-future-proyect.dto';

@Injectable()
export class FutureProyectService {
  create(createFutureProyectDto: CreateFutureProyectDto) {
    return 'This action adds a new futureProyect';
  }

  findAll() {
    return `This action returns all futureProyect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} futureProyect`;
  }

  update(id: number, updateFutureProyectDto: UpdateFutureProyectDto) {
    return `This action updates a #${id} futureProyect`;
  }

  remove(id: number) {
    return `This action removes a #${id} futureProyect`;
  }
}
