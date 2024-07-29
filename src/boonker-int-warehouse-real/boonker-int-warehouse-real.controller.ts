import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoonkerIntWarehouseRealService } from './boonker-int-warehouse-real.service';
import { CreateBoonkerIntWarehouseRealDto } from './dto/create-boonker-int-warehouse-real.dto';
import { UpdateBoonkerIntWarehouseRealDto } from './dto/update-boonker-int-warehouse-real.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Bodegas Real')
@Controller('boonker-int-warehouse-real')
export class BoonkerIntWarehouseRealController {
  constructor(private readonly orderProductService: BoonkerIntWarehouseRealService) {}

  @Post()
  create(@Body() createOrderProductDto: CreateBoonkerIntWarehouseRealDto) {
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
  update(@Param('id') id: string, @Body() updateOrderProductDto: UpdateBoonkerIntWarehouseRealDto) {
    return this.orderProductService.update(id, updateOrderProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderProductService.remove(id);
  }
}
