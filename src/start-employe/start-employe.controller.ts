import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { StartEmployeService } from './start-employe.service';
import { CreateStartEmployeDto } from './dto/create-start-employe.dto';
import { UpdateStartEmployeDto } from './dto/update-start-employe.dto';

@Controller('start-employee')
export class StartEmployeController {
  constructor(private readonly startEmployeeService: StartEmployeService) {}

  @Post()
  async create(@Body() payload: any): Promise<string> {
    try {

      //console.log(payload)
      await  this.startEmployeeService.create1(payload);
    } catch (err) {
      console.error('Webhook handler error:', err.message);
      return 'Webhook Handler Error';
    }
  }


  @Get()
  findAll() {
    return this.startEmployeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.startEmployeeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateStartEmployeDto) {
    return this.startEmployeeService.update(id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.startEmployeeService.remove(id);
  }
}
