import { Injectable } from '@nestjs/common';
import { UpdateBoardCanvaDto } from './dto/update-board-canva.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BoardCanva, BoardCanvaDocument } from './schema/board-canva.schema';
import { Model, Types } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';


const fs = require('fs');
const AWS = require('aws-sdk');
const path = require('path');
const request = require('request');
const ejs = require('ejs');
const pdf = require('html-pdf');
@Injectable()
export class BoardCanvaService {
  constructor(
    @InjectModel(BoardCanva.name) private projectHouseModel: Model<BoardCanvaDocument>,
  ) {
  }
  data2: any;
  async create(createProjectHouseDto: any) {
    try {

      try {
        createProjectHouseDto.week = this.getDateWeek(createProjectHouseDto.date);



        let val =await this.projectHouseModel.create(createProjectHouseDto)

        console.log("this.val", val)

        return val;
      } catch (e) {
        //////console.log(e);
      }

    } catch (e) {
      //////console.log(e);
    }
  }

  getDateWeek(date) {
    const currentDate =
      (typeof date === 'object') ? date : new Date();
    const januaryFirst =
      new Date(currentDate.getFullYear(), 0, 1);
    const daysToNextMonday =
      (januaryFirst.getDay() === 1) ? 0 :
        (7 - januaryFirst.getDay()) % 7;
    const nextMonday: any =
      new Date(currentDate.getFullYear(), 0,
        januaryFirst.getDate() + daysToNextMonday);
    let result = (currentDate < nextMonday) ? 52 :
      (currentDate > nextMonday ? Math.ceil(
        (currentDate - nextMonday) / (24 * 3600 * 1000) / 7) : 1);
    return result;
  }

  findAll() {
    return `This action returns all projectHous ssse`;
  }

  async findOne(id: string) {

    let find: any = await this.projectHouseModel.findOne({ _id: id.toString() });
    find.active = true;
    await this.projectHouseModel.updateOne({ _id: id }, find);

    return find;

  }

  @Cron(CronExpression.EVERY_DAY_AT_7PM)
  async handleCron() {
    //console.log('activo');
    await this.changeStatus();
  }

  async changeStatus() {
    const currentDate = new Date();

    const projects = await this.projectHouseModel.find({ date: { $lt: currentDate } });
    for (const project of projects) {
      if (project.status === 'Despachado' || project.status === 'Cancelado' || project.status=== 'Anulado') {
        project.confirmation = true;


      } else {
        //console.log(project);
        let dateJ = new Date();
        project.date = new Date(new Date().setDate(dateJ.getDate()));
      }
      //console.log(project._id.toHexString());
        const projectId = (project._id as Types.ObjectId).toHexString();
       await this.projectHouseModel.findOneAndUpdate({ _id: projectId }, project, {
        new: true,
      });
    }
  }


  async findByDate(start: string) {


    let number = parseInt(start);
    let find: any = await this.projectHouseModel.find({
      $and: [
        { week: number },
        { confirmation: true },
      ],
    }).sort({ date: 1 });

    return find;

  }

  async findByDateG(start: string) {


    let number = parseInt(start);
    let find: any = await this.projectHouseModel.find({
      $and: [
        { week: number },
      ],
    }).sort({ date: 1 });

    return find;

  }


  async createGuia(dataq, cb) {

    console.log(dataq);
    let data: any = await this.projectHouseModel.findById(dataq.id)
    console.log(data)

    this.data2 = data;


    data.numeroguia = new Date().getTime();
    data.autorizacion = "23323123100";
    data.fecha = new Date().toLocaleString();
    data.fechaSalida = new Date().toLocaleString();
    data.comprobante = data.ruc;
    data.proyecto = data.client;
    data.ruc = "";
    data.direccion = data.client;
    data.telefono = "";
    data.transportista = "";
    data.empresaTransporte = "";
    data.telefonoTransportista = "";
    data.placa = "";
    data.ructransporte = "";


    let code = []
    let description = []
    let empaque = []
    let unidades = []
    let cantidad = []
    data.block.forEach(item=>{
      if(item.totalDespachar > 0){
        code.push("BKR-MPA-" + item.detalle);
        description.push("BLOQUE "+ item.detalle);
        empaque.push("PALLET");
        unidades.push("1");
        cantidad.push(item.totalDespachar);
      }
    })

    data.grout.forEach(item=>{
      if(item.totalDespachar > 0){
        code.push( item.detalle);
        description.push( item.detalle);
        empaque.push("SACO");
        unidades.push("25KG");
        cantidad.push(item.totalDespachar);
      }
    })

    data.morteros.forEach(item=>{
      if(item.totalDespachar > 0){
        code.push( item.detalle);
        description.push( item.detalle);
        empaque.push("SACO");
        unidades.push("25KG");
        cantidad.push(item.totalDespachar);
      }
    })

    data.dintel.forEach(item=>{
      if(item.totalDespachar > 0){
        code.push( item.detalle);
        description.push( item.detalle);
        empaque.push("SACO");
        unidades.push("25KG");
        cantidad.push(item.totalDespachar);
      }
    })

    data.codigo = code;
    data.descripcion = description;
    data.empaque = empaque;
    data.unidades = unidades;
    data.cantidad = cantidad;


    let jsonIn = {
       email: 'gburbano@boonkerconstrucciones.com;dharo@boonkerconstrucciones.com;sbolanos@boonkerconstrucciones.com' + data.email,
      //email: 'jcarrillo@boonkerconstrucciones.com',
      value: data,
      s31: '',
      project: "",
    };
    let resposeData = '';
    ejs.renderFile('reportes/guias/guias.ejs', data, (err, data) => {
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
        pdf.create(data).toStream(function(erro,stream) {
          stream.pipe(fs.createWriteStream('foo.pdf'));
          //console.log('---------------------------------', self.data2);
          const params = {
            Key: self.data2.name + '_' + new Date().getTime(),
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

          s3.upload(params, async function(err, response) {
            if (response) {

              resposeData = response.Location;

              jsonIn.s31 = resposeData;

            } else {
              //console.log(err);
            }


          });
        });


        pdf.create(data, options).toFile('./html-pdf.pdf', function(err, res) {
          if (err) {
            //console.log(err);
          } else {
            //console.log(res);
          }
        });

      }
    });
    //console.log(jsonIn);
    return  jsonIn;
  }


  async createPreGuia(dataq, cb) {

    console.log(dataq);
    let data: any = await this.projectHouseModel.findById(dataq.id)
    console.log(data)

    this.data2 = data;


    data.numeroguia = new Date().getTime();
    data.autorizacion = "23323123100";
    data.fecha = new Date().toLocaleString();
    data.fechaSalida = new Date().toLocaleString();
    data.comprobante = data.ruc;
    data.proyecto = data.client;
    data.ruc = "";
    data.direccion = data.client;
    data.telefono = "";
    data.transportista = "";
    data.empresaTransporte = "";
    data.telefonoTransportista = "";
    data.placa = "";
    data.ructransporte = "";


    let code = []
    let description = []
    let empaque = []
    let unidades = []
    let cantidad = []
    data.block.forEach(item=>{
      if(item.totalDespachar > 0){
        code.push("BKR-MPA-" + item.detalle);
        description.push("BLOQUE "+ item.detalle);
        empaque.push("PALLET");
        unidades.push("1");
        cantidad.push(item.totalDespachar);
      }
    })

    data.grout.forEach(item=>{
      if(item.totalDespachar > 0){
        code.push( item.detalle);
        description.push( item.detalle);
        empaque.push("SACO");
        unidades.push("25KG");
        cantidad.push(item.totalDespachar);
      }
    })

    data.morteros.forEach(item=>{
      if(item.totalDespachar > 0){
        code.push( item.detalle);
        description.push( item.detalle);
        empaque.push("SACO");
        unidades.push("25KG");
        cantidad.push(item.totalDespachar);
      }
    })

    data.dintel.forEach(item=>{
      if(item.totalDespachar > 0){
        code.push( item.detalle);
        description.push( item.detalle);
        empaque.push("SACO");
        unidades.push("25KG");
        cantidad.push(item.totalDespachar);
      }
    })

    data.codigo = code;
    data.descripcion = description;
    data.empaque = empaque;
    data.unidades = unidades;
    data.cantidad = cantidad;


    let jsonIn = {
      email: 'gburbano@boonkerconstrucciones.com;dharo@boonkerconstrucciones.com;sbolanos@boonkerconstrucciones.com' + data.email,
      //email: 'jcarrillo@boonkerconstrucciones.com',
      value: data,
      s31: '',
      project: "",
    };
    let resposeData = '';
    ejs.renderFile('reportes/preguias/guias.ejs', data, (err, data) => {
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
        pdf.create(data).toStream(function(erro,stream) {
          stream.pipe(fs.createWriteStream('foo.pdf'));
          //console.log('---------------------------------', self.data2);
          const params = {
            Key: self.data2.name + '_' + new Date().getTime(),
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

          s3.upload(params, async function(err, response) {
            if (response) {

              resposeData = response.Location;

              jsonIn.s31 = resposeData;

            } else {
              //console.log(err);
            }


          });
        });


        pdf.create(data, options).toFile('./html-pdf.pdf', function(err, res) {
          if (err) {
            //console.log(err);
          } else {
            //console.log(res);
          }
        });

      }
    });
    //console.log(jsonIn);
    return  jsonIn;
  }


  update(id: string, updateProjectHouseDto: UpdateBoardCanvaDto) {
    let projectWeek = this.getDateWeek(new Date(updateProjectHouseDto.date));

    updateProjectHouseDto.week = projectWeek;
    return this.projectHouseModel.findOneAndUpdate({ _id: id }, updateProjectHouseDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.projectHouseModel.findByIdAndDelete({ _id: id }).exec();
  }

  async findOneU(moduleId: any, ) {

    return this.projectHouseModel.findOne({ _id: moduleId });
    this.generarReporte("")
  }
  generarReporte( cb) {
    ejs.renderFile('reportes/guias/preguias.ejs', "", (err, data) => {
      if (err) {
        cb(err);
      } else {
        const options = {
          format: 'A3',
          orientation: "Portrait",
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


  generarGuia( cb) {
    ejs.renderFile('reportes/guias/guias.ejs', "", (err, data) => {
      if (err) {
        cb(err);
      } else {
        const options = {
          format: 'A3',
          orientation: "Portrait",
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

  generarReporteFactur( cb) {
    ejs.renderFile('reportes/guias/guias.ejs', "", (err, data) => {
      if (err) {
        cb(err);
      } else {
        const options = {
          format: 'A3',
          orientation: "Portrait",
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
