import { Injectable } from '@nestjs/common';
import { CreateBoonkerIntWarehouseProductDto } from './dto/create-boonker-int-warehouse-product.dto';
import { UpdateBoonkerIntWarehouseProductDto } from './dto/update-boonker-int-warehouse-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import {
  BoonkerIntWarehouseProduct,
  BoonkerIntWarehouseProductDocument,
} from './entities/boonker-int-warehouse-product.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BoonkerIntWarehouseProductService {
  constructor(private configService: ConfigService,
              @InjectModel(BoonkerIntWarehouseProduct.name) private readonly permissionModel: Model<BoonkerIntWarehouseProductDocument>,
  ) {
  }

  async create(createRegionDto: CreateBoonkerIntWarehouseProductDto): Promise<any> {
    let dataS = JSON.stringify({
      codigo_barra: createRegionDto.codigo_barra,
      porcentaje_iva: createRegionDto.porcentaje_iva,
      tipo: 'PRO',
      categoria_id: createRegionDto.categoria_id,
      minimo: createRegionDto.minimo,
      pvp1: createRegionDto.pvp1,
      pvp2: '00.0',
      pvp3: '00.0',
      pvp4: '00.0',
      pvp_manual: false,
      descripcion: createRegionDto.descripcion,
      cantidad_stock: createRegionDto.cantidad_stock,
      nombre: createRegionDto.nombre,
      codigo: createRegionDto.codigo,
      estado: 'A',
      para_supereasy: false,
      para_comisariato: false,
      codigo_sap: createRegionDto.codigo_sap,
      pvp_comisariato: createRegionDto.pvp_comisariato,
      categoria_comisariato_id: createRegionDto.categoria_comisariato_id,
    });


    let configP = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.configService.getOrThrow('CONTIFICO') + 'producto',
      headers: {
        'Authorization': this.configService.getOrThrow('KEY'),

      },
      data: dataS,
    };
    //console.log(configP)
    let responseD = '';
    await axios.request(configP)
      .then(async (response) => {
        //console.log(response);
        await this.permissionModel.create(createRegionDto);
        responseD = response.data;
      })
      .catch((error) => {
        responseD = error;
      });
    return responseD;

    //return this.permissionModel.create(createRegionDto);
  }


  async findCategory(): Promise<any> {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: this.configService.getOrThrow('CONTIFICO') + 'categoria',
      headers: {
        'Authorization': this.configService.getOrThrow('KEY'),
      },
      data: '',
    };
    let responseD = '';
    await axios.request(config)
      .then((response) => {
        //console.log(responseD);
        responseD = response.data;
      })
      .catch((error) => {
        responseD = error;
      });
    return responseD;

    //return this.permissionModel.create(createRegionDto);
  }


  async findCategoryFilter(filter: string): Promise<any> {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: this.configService.getOrThrow('CONTIFICO') + 'categoria',
      headers: {
        'Authorization': this.configService.getOrThrow('KEY'),
      },
      data: '',
    };
    let responseD = '';
    await axios.request(config)
      .then((response) => {
        //console.log(responseD);
        responseD = response.data.filter(dat => dat.nombre === filter);
      })
      .catch((error) => {
        responseD = error;
      });
    return responseD;

    //return this.permissionModel.create(createRegionDto);
  }

  async findAll(): Promise<BoonkerIntWarehouseProductDocument[]> {
    return this.permissionModel.find().exec();
  }

  async findOne(id: string): Promise<BoonkerIntWarehouseProductDocument> {
    return this.permissionModel.findOne({ _id: id }).exec();
  }

  async findOneProject(id: string): Promise<BoonkerIntWarehouseProductDocument> {
    return this.permissionModel.findOne({ project: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateBoonkerIntWarehouseProductDto): Promise<BoonkerIntWarehouseProductDocument> {
    return this.permissionModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.permissionModel.findByIdAndDelete({ _id: id }).exec();
  }

  integrateContifico() {
    let data = {};


    axios.post('/user', data)
      .then(function(response) {
        //console.log(response);
      })
      .catch(function(error) {
        //console.log(error);
      });
  }
}
