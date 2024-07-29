import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoonkerIntWarehouseProductService } from './boonker-int-warehouse-product.service';
import { CreateBoonkerIntWarehouseProductDto } from './dto/create-boonker-int-warehouse-product.dto';
import { UpdateBoonkerIntWarehouseProductDto } from './dto/update-boonker-int-warehouse-product.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Bodega Producto')
@Controller('boonker-int-warehouse-product')
export class BoonkerIntWarehouseProductController {
  constructor(private readonly boonkerIntWarehouseProductService: BoonkerIntWarehouseProductService) {}

  @Post()
  create(@Body() createBoonkerIntWarehouseProductDto: CreateBoonkerIntWarehouseProductDto) {

    return this.boonkerIntWarehouseProductService.create(createBoonkerIntWarehouseProductDto);
  }

  @Get()
  findAll() {
    return this.boonkerIntWarehouseProductService.findAll();
  }

  @Get('/category')
  findCategory() {
    return this.boonkerIntWarehouseProductService.findCategory();
  }
  @Get('/category/:filter')
  findCategoryFilter(@Param('filter') filter: string) {
    return this.boonkerIntWarehouseProductService.findCategoryFilter(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boonkerIntWarehouseProductService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoonkerIntWarehouseProductDto: UpdateBoonkerIntWarehouseProductDto) {
    return this.boonkerIntWarehouseProductService.update(id, updateBoonkerIntWarehouseProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boonkerIntWarehouseProductService.remove(id);
  }
}
