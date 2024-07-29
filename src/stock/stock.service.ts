import { Injectable } from '@nestjs/common';
import { UpdateStockDto } from './dto/update-stock.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stock } from './entities/stock.entity';
import { StockRealService } from '../stock-real/stock-real.service';
var _ = require('lodash');

@Injectable()
export class StockService {
  constructor(
    @InjectModel(Stock.name)
    private stockModel: Model<Stock>,
    private stockRealService: StockRealService
  ) {
  }

  async create(createStockDto: any) {
    try {
      let result = {
        ...createStockDto,
      };
      let json

      let valueResponse = createStockDto;

      if (valueResponse.q31_tipoDe === 'Mampuesto') {

        let value = valueResponse.q29_escribaUna.toString().split(/\r\n|\r|\n/, -1);
        for (const item of value) {
          let split = item.split('');
          let tipo = '';
          let mampuesto = '';
          let orificios = '';
          let categoria = '';
          let palet = 1;
          let resistencia = 0;
          ////console.log(split[6]);
          if (split[6] === 'A') {
            ////console.log('Mampuesto Estructural');
            tipo = 'Mampuesto Estructural';
          }
          if (split[7] === 'A') {
            ////console.log('Sin Bisel');
            mampuesto = 'Sin Bisel';
          }
          if (split[7] === 'B') {
            mampuesto = 'Con Bisel';
          }
          if (split[8]) {
            if (split[9]) {
              resistencia = parseInt(split[8] + split[9]);
            }
          }

          if (split[11] === '1') {
            categoria = 'Macho';

          }
          if (split[11] === '2') {
            categoria = 'Hembra';

          }
          if (split[11] === '3') {
            categoria = 'Maestra';

          }
          if (split[11] === '4') {
            categoria = 'Mixto';
          }
          if (split[11] === '5') {
            categoria = 'Doble';
          }
          if (split[11] === '6') {
            categoria = '6';
          }
          if (split[11] === '7') {
            categoria = 'H/M';
          }
          if (split[11] === '8') {
            categoria = 'Maestra Nueva';
          }
          if (split[11] === '9') {
            categoria = 'segunda';
          }


          if (split[10]) {
            orificios = split[10];
          }

          if (split[12]) {
            palet = split[12];
          }

          let date1 = '20' + split[0] + split[1] + '-' + split[2] + split[3] + '-' + split[4] + split[5];
          ////console.log(date1);
          let dat = new Date(date1);


          json = {
            type: tipo,
            category: categoria,
            orifice: orificios,
            endurance: resistencia,
            spare: mampuesto,
            date: dat,
            code: item,
            day:split[4] + split[5],
            month:split[2] + split[3],
            year: '20' + split[0] + split[1],
            palet: palet

          };
          ////console.log(json)
          await this.stockRealService.create(json)

          await this.stockModel.create(json);
        }

      }
      if (valueResponse.q31_tipoDe === 'Morteros') {
        let value = valueResponse.q29_escribaUna.toString().split(/\r\n|\r|\n/, -1);
        for (const item of value) {
          let split = item.split('');
          let tipo = '';
          let mampuesto = '';
          let orificios = '';
          let categoria = '';
          let resistencia = 0;



            mampuesto = split[6] + split[7];


          if (split[8]) {
            orificios = split[8] + split[9] ;
          }

          let date1 = '20' + split[0] + split[1] + '-' + split[2] + split[3] + '-' + split[4] + split[5];
          let dat = new Date(date1);

          json = {
            type: "Morteros",
            category: "Morteros",
            orifice: orificios,
            endurance: resistencia,
            spare: mampuesto,
            date: dat,
            code: item,
            day:split[4] + split[5],
            month:split[2] + split[3],
            year: '20' + split[0] + split[1],
            palet: 1

          };
          ////console.log(json)
          await this.stockRealService.create(json)
          await this.stockModel.create(json);
        }

      }
      if (valueResponse.q31_tipoDe === 'Dinteles') {
        let value = valueResponse.q29_escribaUna.toString().split(/\r\n|\r|\n/, -1);
        //console.log(value)
        for (const item of value) {
          let split = item.split('');
          let tipo = '';
          let mampuesto = '';
          let orificios = '';
          let categoria = '';
          let resistencia = 0;
          ////console.log(split[7]);
          if (split[6] === 'V') {
            tipo = 'Ventanas';
          }
          if (split[6] === 'P') {
            mampuesto = 'Puertas';
          }
          if (split[7]) {
            orificios = split[7] + split[8] + split[9];
          }
          //console.log(split)

          //let date1 = '20' + split[0] + split[1] + '-' + split[2] + split[3] + '-' + split[4] + split[5];
          let dat = new Date();


          json = {
            type: tipo,
            category: categoria,
            orifice: orificios,
            endurance: resistencia,
            spare: mampuesto,
            date: dat,
            code: item,
            day:new Date().getDay(),
            month:new Date().getMonth() + 1,
            year: new Date().getFullYear(),

          };
          //console.log(json)
          await this.stockRealService.create(json)
          await this.stockModel.create(json);


        }

      }
      return createStockDto
    } catch (e) {
      ////console.log(e);
    }
    return 'This action adds a new stock';
  }

  async findAll() {
    return await this.stockModel.find().exec();
  }

  async find(type: string) {

    let res = await this.stockModel.find({ type: type }).exec()


    let response = _.chain(res)
      .groupBy('endurance')
      .mapValues(values => _.chain(values)
        .groupBy('category')
        .mapValues(values => _.chain(values)
          .groupBy('spare')
          .mapValues(values => _.chain(values)
            .groupBy('orifice')
            .mapValues(values => _.chain(values)
              .groupBy('month')
              .mapValues(values => _.chain(values)
                .groupBy('day')
                .mapValues(_.size)
                .value())
              .value())
            .value())
          .value())
        .value()
      )
      .value()


    //////console.log(response)

    return response
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
