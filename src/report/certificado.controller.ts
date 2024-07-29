import {Controller, Get, Res} from '@nestjs/common';
import {CertificadoService} from "./certificado.service";
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Certificado")

@Controller('certificado')
export class CertificadoController {

  constructor(private reporteService: CertificadoService) {
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
                  'Content-Disposition': 'attachment;filename=certificado_boonker.pdf',
                },
            ).end(data);

            //////console.log(resp)

          }
        },
    );
  }



}
