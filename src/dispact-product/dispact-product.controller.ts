import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DispactProductService } from './dispact-product.service';
import { UpdateDispactProductDto } from './dto/update-dispact-product.dto';
import { CreateDispactProductDto } from './dto/create-dispact-product.dto';
@ApiTags('Despacho de producto')
@Controller('dispatch-product')
export class DispactProductController {
  constructor(private readonly sendProductService: DispactProductService) {}

  @Post()
  create(@Body() createSendProductDto: CreateDispactProductDto) {
    return this.sendProductService.create(createSendProductDto);
  }

  @Get()
  findAll() {
    return this.sendProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sendProductService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSendProductDto: UpdateDispactProductDto) {
    return this.sendProductService.update(id, updateSendProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sendProductService.remove(id);
  }
}
