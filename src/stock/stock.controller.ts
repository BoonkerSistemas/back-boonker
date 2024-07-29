import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { StockService } from './stock.service';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Stock')
@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {
  }

  @Post()
  create(@Body() createStockDto: any, @Req() req: any) {
    return this.stockService.create(createStockDto);
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get('/type/:id')
  findOne(@Param('id') id: string) {
    return this.stockService.find(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}
