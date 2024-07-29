import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SendProductService } from './send-product.service';
import { CreateSendProductDto } from './dto/create-send-product.dto';
import { UpdateSendProductDto } from './dto/update-send-product.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Despachos Realizados')
@Controller('send-product')
export class SendProductController {
  constructor(private readonly sendProductService: SendProductService) {}

  @Post()
  create(@Body() createSendProductDto: CreateSendProductDto) {
    return this.sendProductService.create(createSendProductDto);
  }

  @Get()
  findAll() {
    return this.sendProductService.findAll();
  }

  @Get('order/:id')
  findOneProject(@Param('id') id: string) {
    return this.sendProductService.findProject(id);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sendProductService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSendProductDto: UpdateSendProductDto) {
    return this.sendProductService.update(id, updateSendProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sendProductService.remove(id);
  }
}
