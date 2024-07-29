import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { WebhoookService } from './webhoook.service';
import { UpdateWebhoookDto } from './dto/update-webhoook.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('WebHook')
@Controller('webhoook-book')
export class WebhoookController {
  constructor(private readonly webhoookService: WebhoookService) {}

  @Post()
  async create(@Body() payload: any, @Res() res): Promise<string> {
    try {

      //console.log(payload)
      await  this.webhoookService.create(payload, (err, data) => {
        if (err) {
          res.send(err.toString());
        } else {
          let resp = res.writeHead(200, {
              'Content-Length': Buffer.byteLength(data),
              'Content-Type': 'application/pdf',
              'Content-Disposition': 'attachment;filename=certificado_boonker.pdf',
            },
          ).end(data);

        }
      },);
    } catch (err) {
      console.error('Webhook handler error:', err.message);
      return 'Webhook Handler Error';
    }
  }



  @Get()
  findAll() {
    return this.webhoookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webhoookService.findOne(id);
  }

  @Get('project/:id')
  findOneId(@Param('id') id: string) {
    return this.webhoookService.find(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebhoookDto: UpdateWebhoookDto) {
    return this.webhoookService.update(+id, updateWebhoookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webhoookService.remove(+id);
  }
}
