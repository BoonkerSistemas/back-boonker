import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductWarehouseService } from './product-warehouse.service';
import { CreateProductWarehouseDto } from './dto/create-product-warehouse.dto';
import { UpdateProductWarehouseDto } from './dto/update-product-warehouse.dto';

@Controller('product-warehouse')
export class ProductWarehouseController {
  constructor(private readonly productWarehouseService: ProductWarehouseService) {}

  @Post()
  create(@Body() createProductWarehouseDto: CreateProductWarehouseDto) {
    return this.productWarehouseService.create(createProductWarehouseDto);
  }

  @Get()
  findAll() {
    return this.productWarehouseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productWarehouseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductWarehouseDto: UpdateProductWarehouseDto) {
    return this.productWarehouseService.update(+id, updateProductWarehouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productWarehouseService.remove(+id);
  }
}
