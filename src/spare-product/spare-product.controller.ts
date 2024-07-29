import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpareProductService } from './spare-product.service';
import { CreateSpareProductDto } from './dto/create-spare-product.dto';
import { UpdateSpareProductDto } from './dto/update-spare-product.dto';

@Controller('spare-product')
export class SpareProductController {
  constructor(private readonly spareProductService: SpareProductService) {}

  @Post()
  create(@Body() createSpareProductDto: CreateSpareProductDto) {
    return this.spareProductService.create(createSpareProductDto);
  }

  @Get()
  findAll() {
    return this.spareProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spareProductService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpareProductDto: UpdateSpareProductDto) {
    return this.spareProductService.update(id, updateSpareProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spareProductService.remove(id);
  }
}
