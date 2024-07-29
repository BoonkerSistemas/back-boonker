import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoonkerIntWarehouseDispactService } from './boonker-int-warehouse-dispact.service';
import { CreateBoonkerIntWarehouseDispactDto } from './dto/create-boonker-int-warehouse-dispact.dto';
import { UpdateBoonkerIntWarehouseDispactDto } from './dto/update-boonker-int-warehouse-dispact.dto';

@Controller('boonker-int-warehouse-dispact')
export class BoonkerIntWarehouseDispactController {
  constructor(private readonly orderProductService: BoonkerIntWarehouseDispactService) {}

  @Post()
  create(@Body() createOrderProductDto: CreateBoonkerIntWarehouseDispactDto) {
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
  update(@Param('id') id: string, @Body() updateOrderProductDto: UpdateBoonkerIntWarehouseDispactDto) {
    return this.orderProductService.update(id, updateOrderProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderProductService.remove(id);
  }
}
