import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockRealService } from './stock-real.service';
import { CreateStockRealDto } from './dto/create-stock-real.dto';
import { UpdateStockRealDto } from './dto/update-stock-real.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Stock Real')
@Controller('stock-real')
export class StockRealController {
  constructor(private readonly stockRealService: StockRealService) {}

  @Post()
  create(@Body() createStockRealDto: CreateStockRealDto) {
    //////console.log(createStockRealDto)
    return this.stockRealService.create(createStockRealDto);
  }

  @Get(':type')
  findOne(@Param('type') type: string) {
    return this.stockRealService.findType(type);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockRealDto: UpdateStockRealDto) {
    return this.stockRealService.update(+id, updateStockRealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockRealService.remove(id);
  }
}
