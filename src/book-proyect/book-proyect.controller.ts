import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookProyectService } from './book-proyect.service';
import { CreateBookProyectDto } from './dto/create-book-proyect.dto';
import { UpdateBookProyectDto } from './dto/update-book-proyect.dto';

@Controller('book-proyect')
export class BookProyectController {
  constructor(private readonly bookProyectService: BookProyectService) {}

  @Post()
  create(@Body() createBookProyectDto: CreateBookProyectDto) {
    return this.bookProyectService.create(createBookProyectDto);
  }

  @Get()
  findAll() {
    return this.bookProyectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookProyectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookProyectDto: UpdateBookProyectDto) {
    return this.bookProyectService.update(+id, updateBookProyectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookProyectService.remove(+id);
  }
}
