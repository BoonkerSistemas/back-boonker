import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateBoonkerIntWarehouseDto } from './dto/create-boonker-int-warehouse.dto';
import { UpdateBoonkerIntWarehouseDto } from './dto/update-boonker-int-warehouse.dto';
import { BoonkerIntWarehouseService } from './boonker-int-warehouse.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Bodegas')
@Controller('boonker-int-warehouse')
export class BoonkerIntWarehouseController {
  constructor(private readonly orderProductService: BoonkerIntWarehouseService) {}

  @Post()
  create(@Body() createOrderProductDto: CreateBoonkerIntWarehouseDto) {
    return this.orderProductService.create(createOrderProductDto);
  }

  @Get()
  findAll() {
    return this.orderProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderProductService.findOne(id);
  }

  @Get('project/:id')
  findOneProject(@Param('id') id: string) {
    return this.orderProductService.findOneProject(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderProductDto: UpdateBoonkerIntWarehouseDto) {
    return this.orderProductService.update(id, updateOrderProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderProductService.remove(id);
  }
}
