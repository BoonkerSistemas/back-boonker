import { Injectable } from '@nestjs/common';
import { CreateBookProyectDto } from './dto/create-book-proyect.dto';
import { UpdateBookProyectDto } from './dto/update-book-proyect.dto';

@Injectable()
export class BookProyectService {
  create(createBookProyectDto: CreateBookProyectDto) {
    return 'This action adds a new bookProyect';
  }

  findAll() {
    return `This action returns all bookProyect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookProyect`;
  }

  update(id: number, updateBookProyectDto: UpdateBookProyectDto) {
    return `This action updates a #${id} bookProyect`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookProyect`;
  }
}
