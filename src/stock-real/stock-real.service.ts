import { Injectable } from '@nestjs/common';
import { CreateStockRealDto } from './dto/create-stock-real.dto';
import { UpdateStockRealDto } from './dto/update-stock-real.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StockReal } from './entities/stock-real.entity';
var _ = require('lodash');

@Injectable()
export class StockRealService {
  constructor(
    @InjectModel(StockReal.name)
    private stockModel: Model<StockReal>,

  ) {
  }
  async create(createStockRealDto: CreateStockRealDto) {
    //////console.log(createStockRealDto)
    return await this.stockModel.create(createStockRealDto);
  }

  async findType(type) {

   let res=  await this.stockModel.find({ type: type }).exec()


    let response = _.chain(res)
      .groupBy('endurance')
      .mapValues(values => _.chain(values)
        .groupBy('category')
        .mapValues(values => _.chain(values)
          .groupBy('spare')
          .mapValues(values => _.chain(values)
            .groupBy('orifice')
            .mapValues(_.size)
            .value())
          .value())
        .value()
      )
      .value()


    //////console.log(response)

    return response

  }

  async findOne(code: string) {
    try{
      return await this.stockModel.findOne({ code: code.toString() }).exec();
    }catch (e) {
      //////console.log(e)
    }

  }

  update(id: number, updateStockRealDto: UpdateStockRealDto) {
    return `This action updates a #${id} stockReal`;
  }

  async remove(code: string) {
    try{
      //////console.log(code)
      let productRemove = await this.findOne(code)
      ////console.log(productRemove)

      return this.stockModel.findByIdAndDelete({ _id: productRemove._id }).exec();
    }catch (e){
      ////console.log(e)
    }


  }
}
