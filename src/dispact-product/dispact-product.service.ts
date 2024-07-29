import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DispatchProduct } from './entities/dispact-product.entity';
import { UpdateDispactProductDto } from './dto/update-dispact-product.dto';
import { StockRealService } from '../stock-real/stock-real.service';

@Injectable()
export class DispactProductService {
  constructor(
    @InjectModel(DispatchProduct.name)
    private stockModel: Model<DispatchProduct>,
    private stockRealService: StockRealService,
  ) {
  }

  async create(createStockDto: any) {
    try {
      let result = {
        ...createStockDto,
      };
      let json;

      let valueResponse = createStockDto;


      let value = valueResponse.q29_escribaUna.toString().split(/\r\n|\r|\n/, -1);
      
      for (const item of value) {
        let split = item.split('');
        let tipo = 'Morteros';
        let mampuesto = '';
        let orificios = '';
        let categoria = '';
        let resistencia = 0;
        if (split[6] === 'A') {
          
          tipo = 'Mampuesto Estructural';
        }
        if (split[7] === 'A') {
          //////console.log('Con Bisel');
          mampuesto = 'Con Bisel';
        }
        if (split[7] === 'B') {
          mampuesto = 'Sin Bisel';
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
        if (split[10]) {
          orificios = split[10];
        }
       // let date1 = '20' + split[0] + split[1] + '-' + split[2] + split[3] + '-' + split[4] + split[5];
        let dat = new Date();

        if (split[6] === 'V') {
          tipo = 'Ventanas';
          if (split[6]) {
            orificios = split[7] + split[8] + split[9];
            tipo = 'Dinteles';
          }
        }
        if (split[6] === 'P') {
          mampuesto = 'Puertas';
          if (split[7]) {
            tipo = 'Dinteles';
            orificios = split[7] + split[8] + split[9];
          }
        }

        if (tipo === 'Morteros') {
          mampuesto = split[6] + split[7];
          if (split[8]) {
            orificios = split[8] + split[9];
          }
        }


        json = {
          type: tipo,
          category: categoria,
          orifice: orificios,
          endurance: resistencia,
          spare: mampuesto,
          date: dat,
          code: item,
          project: valueResponse.q31_proyecto,
          drive: valueResponse.q32_conductor,
          plate: valueResponse.q10_placa,

        };

        //console.log(json);
        try{
          await this.stockModel.create(json);
          await this.stockRealService.remove(json.code);
        }catch (e) {
          //////console.log(e)
        }

      }


      return createStockDto;
    } catch (e) {
      //////console.log(e);
    }
    return 'This action adds a new stock';
  }

  async findAll() {
    return await this.stockModel.find().exec();
  }

  findOne(id: string) {
    return `This action returns a #${id} stock`;
  }

  update(id: string, updateStockDto: UpdateDispactProductDto) {
    return `This action updates a #${id} stock`;
  }

  async remove(prod: string) {
    await this.stockModel.findOne().exec();
  }
}
