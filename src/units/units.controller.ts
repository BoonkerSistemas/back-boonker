import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Controller('units')
export class UnitsController {
  constructor(private readonly proyectService: UnitsService) {}

  @Post()
  create(@Body() createProyectDto: CreateUnitDto) {
    return this.proyectService.create(createProyectDto);
  }



  @Get('documentproject/:id/:type')
  findDocument(@Param('id') id: string, @Param('type') type: string) {
    return this.proyectService.findOneDocument(id, type);
  }

  @Get('user/:id')
  findByRuc(@Param('id') id: string, @Param('project') project: string) {
    return this.proyectService.findByClient(id, project);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectDto: UpdateUnitDto) {
    return this.proyectService.update(id, updateProyectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectService.remove(id);
  }
}
