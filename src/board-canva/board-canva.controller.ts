import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { BoardCanvaService } from './board-canva.service';
import { CreateBoardCanvaDto } from './dto/create-board-canva.dto';
import { UpdateBoardCanvaDto } from './dto/update-board-canva.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Board')
@Controller('board-canva')
export class BoardCanvaController {
  constructor(private readonly boardCanvaService: BoardCanvaService) {}

  @Post()
  create(@Body() createBoardCanvaDto: CreateBoardCanvaDto) {
    return this.boardCanvaService.create(createBoardCanvaDto);
  }

  @Get()
  findAll() {
    return this.boardCanvaService.findAll();
  }

  @Get('date/:start')
  findByDate(@Param('start') start: string) {
    return this.boardCanvaService.findByDate(start, );
  }

  @Get('dateg/:start')
  findByDateG(@Param('start') start: string) {
    return this.boardCanvaService.findByDateG(start, );
  }

  @Post('/pre-guia/:id')
  async guiaPre(@Param() id: any, @Res() res): Promise<string> {
    try {

      //console.log(payload)
      await  this.boardCanvaService.createPreGuia(id, (err, data) => {
        if (err) {
          res.send(err.toString());
        } else {
          let resp = res.writeHead(200, {
              'Content-Length': Buffer.byteLength(data),
              'Content-Type': 'application/pdf',
              'Content-Disposition': 'attachment;filename=pre-guia.pdf',
            },
          ).end(data);

        }
      },);
    } catch (err) {
      console.error('Webhook handler error:', err.message);
      return 'Webhook Handler Error';
    }
  }



  @Post('/guia/:id')
  async guia(@Param() id: any, @Res() res): Promise<string> {
    try {

      //console.log(payload)
      await  this.boardCanvaService.createGuia(id, (err, data) => {
        if (err) {
          res.send(err.toString());
        } else {
          let resp = res.writeHead(200, {
              'Content-Length': Buffer.byteLength(data),
              'Content-Type': 'application/pdf',
              'Content-Disposition': 'attachment;filename=guia.pdf',
            },
          ).end(data);

        }
      },);
    } catch (err) {
      console.error('Webhook handler error:', err.message);
      return 'Webhook Handler Error';
    }
  }




  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardCanvaDto: UpdateBoardCanvaDto) {
    return this.boardCanvaService.update(id, updateBoardCanvaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardCanvaService.remove(id);
  }

  @Get('board/:id')
  findIdById(@Param('id') id: string) {

   /* this.boardCanvaService.generarReporte(
      (err, data) => {
        if (err) {
          res.send(err.toString());
        } else {
          let resp = res.writeHead(200, {
              'Content-Length': Buffer.byteLength(data),
              'Content-Type': 'application/pdf',
              'Content-Disposition': 'attachment;filename=certificado_boonker.pdf',
            },
          ).end(data);

          //////console.log(resp)

        }
      },
    ); */

    return this.boardCanvaService.findOneU(id);
  }
}
