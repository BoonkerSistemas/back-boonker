import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FutureSendProyectService } from './future-send-proyect.service';
import { CreateFutureSendProyectDto } from './dto/create-future-send-proyect.dto';
import { UpdateFutureSendProyectDto } from './dto/update-future-send-proyect.dto';

@Controller('future-send-proyect')
export class FutureSendProyectController {
  constructor(private readonly futureSendProyectService: FutureSendProyectService) {}

  @Post()
  create(@Body() createFutureSendProyectDto: CreateFutureSendProyectDto) {
    return this.futureSendProyectService.create(createFutureSendProyectDto);
  }

  @Get()
  findAll() {
    return this.futureSendProyectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.futureSendProyectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFutureSendProyectDto: UpdateFutureSendProyectDto) {
    return this.futureSendProyectService.update(+id, updateFutureSendProyectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.futureSendProyectService.remove(+id);
  }
}
