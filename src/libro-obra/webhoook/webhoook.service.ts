import {Injectable} from '@nestjs/common';
import {UpdateWebhoookDto} from './dto/update-webhoook.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {WebHook} from './entities/webhoook.entity';
import {EmailService} from '../../service/email.service';

import {S3Client} from '@aws-sdk/client-s3';
import {ConfigService} from '@nestjs/config';
import {ProyectService} from '../../proyect/proyect.service';

const axios = require('axios');
const ejs = require('ejs');
const pdf = require('html-pdf');

const fs = require('fs');
const AWS = require('aws-sdk');
const path = require('path');
const request = require('request');

@Injectable()
export class WebhoookService {

    constructor(
        @InjectModel(WebHook.name) private readonly webHookModel: Model<WebHook>,
        private configService: ConfigService,
        private email: EmailService,
        private module: ProyectService,
    ) {
    }

    data2: any;

    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow('AWS_S3_REGION'),
    });

    async create(data, cb) {

        this.data2 = data
        console.log(data)
        let path = data.q138_escribaUna.split('/');
        let id = path[path.length - 1];


        let project = await this.module.findOne(id);


        data.name = project.name;
        data.location = project.location;
        data.module = project.module[0].module;
        data.personResponsible = project.personResponsible[0];
        data.cliente = project.ruc;
        data.email = project.client[0].emailWork;
        data.picture = project.picture;
        data.nombreU = project?.reponsive?.name?project.responsive.name: "Marianela"
        data.apellidoU = project?.reponsive?.lastName?project.responsive.lastName: "Guerrero"


        let jsonIn = {
            //email: 'gburbano@boonkerconstrucciones.com;dharo@boonkerconstrucciones.com;' + data.email,
            email: 'jcarrillo@boonkerconstrucciones.com',
            value: data,
            s31: '',
            project: id,
        };
        let resposeData = '';
        ejs.renderFile('reportes/reporte/guias.ejs', data, (err, data) => {
            if (err) {
                cb(err);
            } else {
                const options = {
                    format: 'A4',
                    orientation: 'portrait',

                };
                pdf.create(data, options).toBuffer((err2, data2) => {
                    if (err2) {
                        cb(err2);
                    } else {
                        cb(null, data2);
                    }
                });
                let self = this;
                pdf.create(data).toStream(function (erro, stream) {
                    stream.pipe(fs.createWriteStream('foo.pdf'));
                    //console.log('---------------------------------', self.data2);
                    const params = {
                        Key: self.data2.name + '_' + self.data2.q137_idUnico,
                        Body: stream,
                        Bucket: 'boonker-construcciones',
                        ContentType: 'application/pdf',
                        ACL: 'public-read',
                    };

                    const s3 = new AWS.S3({
                        accessKeyId: process.env.AWS_ACCESS_KEY,
                        secretAccessKey: process.env.AWS_SECRET_KEY,
                    });
                    //notice use of the upload function, not the putObject function

                    s3.upload(params, async function (err, response) {
                        if (response) {

                            console.log(response)
                            resposeData = response.Location;

                            jsonIn.s31 = resposeData;
                            await self.webHookModel.create(jsonIn);
                            await self.email.sendInforme(jsonIn, 'Informe de Visita de Obra', resposeData);
                        } else {
                            //console.log(err);
                        }


                    });
                });


                pdf.create(data, options).toFile('./html-pdf.pdf', function (err, res) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(res);
                    }
                });

            }
        });
        //console.log(jsonIn);
        return this.webHookModel.create(jsonIn);
    }


    findAll() {
        return `This action returns all webhoook`;
    }

    findOne(id: string) {
        return `This action returns a #${id} webhoook`;
    }

    find(id: string) {
        //console.log(id);
        return this.webHookModel.find({project: id});
    }

    update(id: number, updateWebhoookDto: UpdateWebhoookDto) {
        return `This action updates a #${id} webhoook`;
    }

    remove(id: number) {
        return `This action removes a #${id} webhoook`;
    }


}
