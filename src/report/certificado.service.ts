import { Injectable} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const ejs = require('ejs');
const pdf = require('html-pdf');

@Injectable()
export class CertificadoService {
    constructor() {
    }

    generarReporteIncidentesNowForcesInforme( cb) {
        ejs.renderFile('reportes/incidentes-now-force.ejs', "", (err, data) => {
            if (err) {
                cb(err);
            } else {
                const options = {
                    format: 'A4',
                    orientation: "landscape",
                };
                pdf.create(data, options).toBuffer((err2, data2) => {
                    if (err2) {
                        cb(err2);
                    } else {
                        cb(null, data2);
                    }
                });
            }
        });

    }


}
