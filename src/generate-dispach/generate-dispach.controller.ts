import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GenerateDispachService } from './generate-dispach.service';
import { CreateGenerateDispachDto } from './dto/create-generate-dispach.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateBoardCanvaDto } from '../board-canva/dto/update-board-canva.dto';
@ApiTags("GenerateDispach")
@Controller('generate-dispach')
export class GenerateDispachController {
  constructor(private readonly generateDispachService: GenerateDispachService) {}



  @Post()
  create(@Body() createGenerateDispachDto: CreateGenerateDispachDto) {
    return this.generateDispachService.create(createGenerateDispachDto);
  }

  @Get(':project/:module/:tonelaje')
  findAll(@Param('project') project: string,@Param('module') module: string, @Param('tonelaje') tonelaje: string) {
    return this.generateDispachService.findAll(project,module,tonelaje,  );
  }


  @Get()
  find() {
    return this.generateDispachService.findFile( );
  }





  @Post('se/:id/:idProject')
  update(@Param('id') id: string, @Param('idProject') idProject: string) {
    return this.generateDispachService.updateSE(id, idProject);
  }

  @Get(':module')
  findId(@Param('module') module: string) {
    return this.generateDispachService.findModule(module);
  }

  @Post('finanzas/:id/:idProject/:pago')
  updateF(@Param('id') id: string, @Param('idProject') idProject: string,@Param('pago') pago: string) {
    return this.generateDispachService.updateFinanzas(id,idProject, pago);
  }

  @Get('cliente/:id')
  updateC(@Param('id') id: string) {
    return this.generateDispachService.updateCliente(id);
  }

  @Post('pagocliente/:id/:idProject/:pago')
  updatePago(@Param('id') id: string, @Param('idProject') idProject: string,@Param('pago') pago: string) {
    return this.generateDispachService.updatePago(id, idProject, pago);
  }


  @Patch(':id')
  updateP(@Param('id') id: string, @Body() updateBoardCanvaDto: any) {
    console.log(updateBoardCanvaDto);
    return this.generateDispachService.update(id, updateBoardCanvaDto);
  }





}
