import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayphoneService } from './payphone.service';
import { CreatePayphoneDto } from './dto/create-payphone.dto';
import { UpdatePayphoneDto } from './dto/update-payphone.dto';

@Controller('payphone')
export class PayphoneController {
  constructor(private readonly payphoneService: PayphoneService) {}

  @Post()
  create(@Body() createPayphoneDto: any) {
    console.log(createPayphoneDto)
    return this.payphoneService.pagarPayphone(createPayphoneDto);
  }


  @Post('/pago')
  createPago(@Body() createPayphoneDto: any) {
    console.log(createPayphoneDto)
    return this.payphoneService.aprobarPagoPayphone(createPayphoneDto);
  }
  @Get()
  findAll() {

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payphoneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayphoneDto: UpdatePayphoneDto) {
    return this.payphoneService.update(+id, updatePayphoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payphoneService.remove(+id);
  }
}
