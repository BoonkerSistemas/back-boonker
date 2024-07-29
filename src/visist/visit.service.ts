import { Injectable} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const ejs = require('ejs');
const pdf = require('html-pdf');

@Injectable()
export class VisitService {
    constructor() {
    }

    generarReporteIncidentesNowForcesInforme( cb) {
        ejs.renderFile('reportes/reporte/guias.ejs', "", (err, data) => {
            if (err) {
                cb(err);
            } else {
                const options = {
                    format: 'A4',
                    orientation: "portrait",
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
