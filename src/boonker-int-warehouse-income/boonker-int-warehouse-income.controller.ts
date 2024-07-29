import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoonkerIntWarehouseIncomeService } from './boonker-int-warehouse-income.service';
import { CreateBoonkerIntWarehouseIncomeDto } from './dto/create-boonker-int-warehouse-income.dto';
import { UpdateBoonkerIntWarehouseIncomeDto } from './dto/update-boonker-int-warehouse-income.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Bodegas Ingreso')
@Controller('boonker-int-warehouse-income')
export class BoonkerIntWarehouseIncomeController {
  constructor(private readonly orderProductService: BoonkerIntWarehouseIncomeService) {}

  @Post()
  create(@Body() createOrderProductDto: CreateBoonkerIntWarehouseIncomeDto) {
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
  update(@Param('id') id: string, @Body() updateOrderProductDto: UpdateBoonkerIntWarehouseIncomeDto) {
    return this.orderProductService.update(id, updateOrderProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderProductService.remove(id);
  }
}
