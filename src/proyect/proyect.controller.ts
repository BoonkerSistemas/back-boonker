import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { CreateProjectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("Project")
@Controller('project')
export class ProyectController {
  constructor(private readonly proyectService: ProyectService) {}

  @Post()
  create(@Body() createProyectDto: CreateProjectDto) {
    return this.proyectService.create(createProyectDto);
  }

  @Get('status/:status')
  findStatus(@Param('status') status: string) {
    return this.proyectService.findAllActive(status);
  }

  @Get('statusproject/:status')
  findStatusActive(@Param('status') status: string) {
    return this.proyectService.findActiveStatusId(status);
  }

  @Get('documentproject/:id/:type')
  findDocument(@Param('id') id: string, @Param('type') type: string) {
    return this.proyectService.findOneDocument(id, type);
  }

  @Get('user/:id')
  findByRuc(@Param('id') id: string) {
    return this.proyectService.findByClient(id);
  }

  @Get()
  findAll() {
    return this.proyectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectDto: UpdateProyectDto) {
    return this.proyectService.update(id, updateProyectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectService.remove(id);
  }
}
