import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectHouseService } from './project-house.service';
import { CreateProjectHouseDto } from './dto/create-project-house.dto';
import { UpdateProjectHouseDto } from './dto/update-project-house.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Project House')
@Controller('project-house')
export class ProjectHouseController {
  constructor(private readonly projectHouseService: ProjectHouseService) {}

  @Post()
  create(@Body() createProjectHouseDto: CreateProjectHouseDto) {
    return this.projectHouseService.create(createProjectHouseDto);
  }

  @Get()
  findAll() {
    return this.projectHouseService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.projectHouseService.findOne(name);
  }

  @Get('person/:name')
  findPerson(@Param('name') name: string) {
    return this.projectHouseService.findPerson(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectHouseDto: UpdateProjectHouseDto) {
    return this.projectHouseService.update(id, updateProjectHouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectHouseService.remove(+id);
  }
}
