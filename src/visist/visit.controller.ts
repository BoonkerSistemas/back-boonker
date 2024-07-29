import {Controller, Get, Res} from '@nestjs/common';
import {VisitService} from "./visit.service";
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Visita")

@Controller('visita')
export class VisitController {

  constructor(private reporteService: VisitService) {
  }

  @Get('')
  getGenerarReporteIncidentesNowForcesInforme( @Res() res) {
    this.reporteService.generarReporteIncidentesNowForcesInforme(
        (err, data) => {
          if (err) {
            res.send(err.toString());
          } else {
            let resp = res.writeHead(200, {
                  'Content-Length': Buffer.byteLength(data),
                  'Content-Type': 'application/pdf',
                  'Content-Disposition': 'attachment;filename=informe_visita.pdf',
                },
            ).end(data);

            //////console.log(resp)

          }
        },
    );
  }



}
