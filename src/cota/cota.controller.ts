import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotaService } from './cota.service';
import { CreateCotaDto } from './dto/create-cota.dto';
import { UpdateCotaDto } from './dto/update-cota.dto';

@Controller('cota')
export class CotaController {
  constructor(private readonly cotaService: CotaService) {}

  @Post()
  async create(@Body() payload: any): Promise<string> {
    try {

      //console.log(payload)
      await  this.cotaService.create1(payload);
    } catch (err) {
      console.error('Webhook handler error:', err.message);
      return 'Webhook Handler Error';
    }
  }


  @Get()
  findAll() {
    return this.cotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cotaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateCotaDto) {
    return this.cotaService.update(id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cotaService.remove(id);
  }
}
