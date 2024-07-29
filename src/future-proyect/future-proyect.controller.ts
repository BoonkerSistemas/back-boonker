import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FutureProyectService } from './future-proyect.service';
import { CreateFutureProyectDto } from './dto/create-future-proyect.dto';
import { UpdateFutureProyectDto } from './dto/update-future-proyect.dto';

@Controller('future-proyect')
export class FutureProyectController {
  constructor(private readonly futureProyectService: FutureProyectService) {}

  @Post()
  create(@Body() createFutureProyectDto: CreateFutureProyectDto) {
    return this.futureProyectService.create(createFutureProyectDto);
  }

  @Get()
  findAll() {
    return this.futureProyectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.futureProyectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFutureProyectDto: UpdateFutureProyectDto) {
    return this.futureProyectService.update(+id, updateFutureProyectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.futureProyectService.remove(+id);
  }
}
