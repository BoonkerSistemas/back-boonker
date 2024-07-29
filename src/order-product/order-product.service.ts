import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderProduct } from './schema/order-product.schema';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { ProductService } from '../product/product.service';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectModel(OrderProduct.name) private readonly permissionModel: Model<OrderProduct>,
    private productService: ProductService,
  ) {
  }

  async create(createRegionDto: any): Promise<OrderProduct> {
    let valFinal: any;
    let anio = '';
    let detalle: any = createRegionDto.detalle;
    let maestraCantidad = 0;
    let blq12sbCantidad = 0;
    let blq12cbCantidad = 0;
    let blq12cbtCantidad = 0;
    let blq12sbtCantidad = 0;

    let blq20sbCantidad = 0;
    let blq20cbCantidad = 0;
    let blq20cbtCantidad = 0;
    let blq20sbtCantidad = 0;

    let dintel1 = 0;
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;
    let flag5 = false;

    let flag6 = false;
    let flag7 = false;
    let flag8 = false;

    let pvpmaestraCantidad = 0;
    let pvpblq12sbCantidad = 0;
    let pvpblq12cbCantidad = 0;
    let pvpblq12cbtCantidad = 0;
    let pvpblq12sbtCantidad = 0;

    let pvpblq20sbCantidad = 0;
    let pvpblq20cbCantidad = 0;
    let pvpblq20cbtCantidad = 0;
    let pvpblq20sbtCantidad = 0;
    let pvpdintel = 0;
    let pvp1 = 0;
    let pvp2 = 0;
    let pvp3 = 0;
    let pvp4 = 0;
    let pvp5 = 0;
    let pvp6 = 0;
    let pvp7 = 0;
    let pvp8 = 0;

    let prod = [];

    let val = [];

    for (const element of detalle) {
      switch (element.detalle) {
        case 'MAESTRA':
          anio = element.tipoPrecio;
          maestraCantidad = maestraCantidad + parseFloat(element.cantidad);
          prod = await this.productService.findProduct(element.detalle);
          pvpmaestraCantidad = pvpmaestraCantidad + (maestraCantidad * (parseFloat(prod[0]['PRECIO' + element.tipoPrecio]) * element.cantidad));
          break;

        case 'BLOQUE PREFABRICADO BKR 12 MPA SIN BISEL':
          blq12sbCantidad = blq12sbCantidad + parseFloat(element.cantidad);
          prod = await this.productService.findProduct(element.detalle);
          pvpblq12sbCantidad = pvpblq12sbCantidad + (maestraCantidad * (parseFloat(prod[0]['PRECIO' + element.tipoPrecio]) * element.cantidad));
          pvp1 = parseFloat(prod[0]['PRECIO' + element.tipoPrecio]);
          flag1 = true;
          break;
        case 'BLOQUE PREFABRICADO BKR 12 MPA CON BISEL':
          blq12cbCantidad = blq12cbCantidad + parseFloat(element.cantidad);
          prod = await this.productService.findProduct(element.detalle);
          pvpblq12cbCantidad = pvpblq12cbCantidad + (maestraCantidad * (parseFloat(prod[0]['PRECIO' + element.tipoPrecio]) * element.cantidad));
          pvp2 = parseFloat(prod[0]['PRECIO' + element.tipoPrecio]);
          flag2 = true;
          break;
        case 'BLOQUE PREFABRICADO BKR 12 MPA SIN BISEL TINTURADO':

          blq12cbtCantidad = blq12cbtCantidad + parseFloat(element.cantidad);
          prod = await this.productService.findProduct(element.detalle);
          pvpblq12sbtCantidad = pvpblq12sbtCantidad + (maestraCantidad * (parseFloat(prod[0]['PRECIO' + element.tipoPrecio]) * element.cantidad));
          pvp3 = parseFloat(prod[0]['PRECIO' + element.tipoPrecio]);
          flag3 = true;
          break;
        case 'BLOQUE PREFABRICADO BKR 12 MPA CON BISEL TINTURADO':
          blq12sbtCantidad = blq12sbtCantidad + parseFloat(element.cantidad);
          prod = await this.productService.findProduct(element.detalle);
          pvpblq12cbtCantidad = pvpblq12cbtCantidad + (maestraCantidad * (parseFloat(prod[0]['PRECIO' + element.tipoPrecio]) * element.cantidad));
          pvp4 = parseFloat(prod[0]['PRECIO' + element.tipoPrecio]);
          flag4 = true;
          break;
        case 'BLOQUE PREFABRICADO BKR 20 MPA SIN BISEL':
          blq20sbCantidad = blq20sbCantidad + parseFloat(element.cantidad);
          prod = await this.productService.findProduct(element.detalle);
          pvpblq12sbCantidad = pvpblq12sbCantidad + (maestraCantidad * (parseFloat(prod[0]['PRECIO' + element.tipoPrecio]) * element.cantidad));
          pvp5 = parseFloat(prod[0]['PRECIO' + element.tipoPrecio]);
          flag5 = true;
          break;
        case 'BLOQUE PREFABRICADO BKR 20 MPA CON BISEL':
          blq20cbCantidad = blq20cbCantidad + parseFloat(element.cantidad);
          prod = await this.productService.findProduct(element.detalle);
          pvpblq20cbCantidad = pvpblq20cbCantidad + (maestraCantidad * (parseFloat(prod[0]['PRECIO' + element.tipoPrecio]) * element.cantidad));
          pvp6 = parseFloat(prod[0]['PRECIO' + element.tipoPrecio]);
          flag6 = true;
          break;
        case 'BLOQUE PREFABRICADO BKR 20 MPA SIN BISEL TINTURADO':
          blq20sbtCantidad = blq20sbtCantidad + parseFloat(element.cantidad);
          prod = await this.productService.findProduct(element.detalle);
          pvpblq20sbtCantidad = pvpblq20sbtCantidad + (maestraCantidad * (parseFloat(prod[0]['PRECIO' + element.tipoPrecio]) * element.cantidad));
          pvp7 = parseFloat(prod[0]['PRECIO' + element.tipoPrecio]);
          flag7 = true;
          break;
        case 'BLOQUE PREFABRICADO BKR 20 MPA CON BISEL TINTURADO':
          blq20cbtCantidad = blq20cbtCantidad + parseFloat(element.cantidad);
          prod = await this.productService.findProduct(element.detalle);
          pvpblq20cbtCantidad = pvpblq20cbtCantidad + (maestraCantidad * (parseFloat(prod[0]['PRECIO' + element.tipoPrecio]) * element.cantidad));
          pvp8 = parseFloat(prod[0]['PRECIO' + element.tipoPrecio]);
          flag8 = true;
          break;
        case 'DINTEL CONCRETO ARMADO 50cm':
          dintel1 = dintel1 + (element.cantidad * 50);
          break;
        case 'DINTEL CONCRETO ARMADO 75cm':
          dintel1 = dintel1 + (element.cantidad * 75);
          break;
        case 'DINTEL CONCRETO ARMADO 100cm':
          dintel1 = dintel1 + (element.cantidad * 100);
          break;
        case 'DINTEL CONCRETO ARMADO 125cm':
          dintel1 = dintel1 + (element.cantidad * 125);
          break;
        case 'DINTEL CONCRETO ARMADO 150cm':
          dintel1 = dintel1 + (element.cantidad * 150);
          break;
        case 'DINTEL CONCRETO ARMADO 175cm':
          dintel1 = dintel1 + (element.cantidad * 175);
          break;
        case 'DINTEL CONCRETO ARMADO 200cm':
          dintel1 = dintel1 + (element.cantidad * 200);
          break;
        case 'DINTEL CONCRETO ARMADO 225cm':
          dintel1 = dintel1 + (element.cantidad * 225);
          break;
        case 'DINTEL CONCRETO ARMADO 250cm':
          dintel1 = dintel1 + (element.cantidad * 250);
          break;
        case 'DINTEL CONCRETO ARMADO 275cm':
          dintel1 = dintel1 + (element.cantidad * 275);
          break;
        case 'DINTEL CONCRETO ARMADO 300cm':
          dintel1 = dintel1 + (element.cantidad * 300);
          break;
        case 'DINTEL CONCRETO ARMADO 325cm':
          dintel1 = dintel1 + (element.cantidad * 325);
          break;
        case 'DINTEL CONCRETO ARMADO 350cm':
          dintel1 = dintel1 + (element.cantidad * 350);
          break;
        case 'DINTEL CONCRETO ARMADO 62cm':
          dintel1 = dintel1 + (element.cantidad * 62.5);
          break;
        case 'DINTEL CONCRETO ARMADO 87cm':
          dintel1 = dintel1 + (element.cantidad * 87.5);
          break;
        case 'DINTEL CONCRETO ARMADO 112cm':
          dintel1 = dintel1 + (element.cantidad * 112.5);
          break;
        case 'DINTEL CONCRETO ARMADO 137cm':
          dintel1 = dintel1 + (element.cantidad * 137.5);
          break;
        case 'DINTEL CONCRETO ARMADO 162cm':
          dintel1 = dintel1 + (element.cantidad * 162.5);
          break;
        case 'DINTEL CONCRETO ARMADO 187cm':
          dintel1 = dintel1 + (element.cantidad * 187.5);
          break;
        case 'DINTEL CONCRETO ARMADO 212cm':
          dintel1 = dintel1 + (element.cantidad * 212.5);
          break;
        case 'DINTEL CONCRETO ARMADO 237cm':
          dintel1 = dintel1 + (element.cantidad * 237.5);
          break;
        case 'DINTEL CONCRETO ARMADO 262cm':
          dintel1 = dintel1 + (element.cantidad * 262.5);
          break;
        case 'DINTEL CONCRETO ARMADO 287cm':
          dintel1 = dintel1 + (element.cantidad * 287.5);
          break;
        case 'DINTEL CONCRETO ARMADO 312cm':
          dintel1 = dintel1 + (element.cantidad * 312.5);
          break;
        case 'DINTEL CONCRETO ARMADO 337cm':
          dintel1 = dintel1 + (element.cantidad * 337.5);
          break;

      }
    }

    let plmaestra = maestraCantidad / 8.09;
    let flagMaestra = plmaestra % 1 !== 0;
    let nuewRount;
    let m2Maestra = 0;
    if (flagMaestra == true) {
      nuewRount = Math.round(plmaestra * 2) / 2;
      m2Maestra = nuewRount * 8.09;
    } else {
      m2Maestra = maestraCantidad;
    }
    val.push({
      detalle: 'MAESTRA',
      cantidad: parseInt(((m2Maestra/8.09)* 144).toString()),
      unidad: 'u',
      precio: 0,
      total: 0,
    });

    //console.log(maestraCantidad, pvp1, maestraCantidad * pvp1);

    let bq1= 0
    if (flagMaestra == true) {
      nuewRount = Math.round(blq12sbCantidad * 2) / 2;
      bq1 = nuewRount;
    } else {
      bq1 = blq12sbCantidad;
    }

    if (flag1 === true) {
      let u = {
        detalle: 'BLOQUE PREFABRICADO BKR 12 MPA SIN BISEL',
        cantidad: bq1,
        unidad: 'm2',
        precio: pvp1,
        total: (bq1 * pvp1).toFixed(2),
      };
      val.push(u);
      //console.log(blq12sbCantidad, pvp1, maestraCantidad * pvp1);
    }
    let bq2= 0
    if (flagMaestra == true) {
      nuewRount = Math.round(blq12cbCantidad * 2) / 2;
      bq2 = nuewRount ;
    } else {
      bq2 = blq12cbCantidad;
    }
    if (flag2 === true) {
      let u1 = {
        detalle: 'BLOQUE PREFABRICADO BKR 12 MPA CON BISEL',
        cantidad: bq2,
        unidad: 'm2',
        precio: pvp2,
        total: (bq2 * pvp2).toFixed(2),
      };
      val.push(u1);
    }

    let bq3= 0
    if (flagMaestra == true) {
      nuewRount = Math.round(blq12sbtCantidad * 2) / 2;
      bq3 = nuewRount ;
    } else {
      bq3 = blq12sbtCantidad;
    }


    if (flag3 === true) {
      let u2 = {
        detalle: 'BLOQUE PREFABRICADO BKR 12 MPA SIN BISEL TINTURADO',
        cantidad: bq3,
        unidad: 'm2',
        precio: pvp3,
        total: (bq3 * pvp3).toFixed(2),
      };
      val.push(u2);
    }

    let bq4= 0
    if (flagMaestra == true) {
      nuewRount = Math.round(blq12cbtCantidad * 2) / 2;
      bq4 = nuewRount ;
    } else {
      bq4 = blq12cbtCantidad;
    }

    if (flag4 === true) {
      let u3 = {
        detalle: 'BLOQUE PREFABRICADO BKR 12 MPA CON BISEL TINTURADO',
        cantidad: bq4,
        unidad: 'm2',
        precio: pvp4,
        total: (bq4 * pvp4).toFixed(2),
      };
      val.push(u3);
    }

    let bq5= 0
    if (flagMaestra == true) {
      nuewRount = Math.round(blq20sbCantidad * 2) / 2;
      bq5 = nuewRount ;
    } else {
      bq5 = blq20sbCantidad;
    }

    if (flag5 === true) {
      let u4 = {
        detalle: 'BLOQUE PREFABRICADO BKR 20 MPA SIN BISEL',
        cantidad: bq5,
        unidad: 'm2',
        precio: pvp5,
        total: (pvp5 * bq5).toFixed(2),
      };
      val.push(u4);
    }

    let bq6= 0
    if (flagMaestra == true) {
      nuewRount = Math.round(blq20cbCantidad * 2) / 2;
      bq6 = nuewRount ;
    } else {
      bq6 = blq20cbCantidad;
    }

    if (flag6 === true) {
      let u5 = {
        detalle: 'BLOQUE PREFABRICADO BKR 20 MPA CON BISEL',
        cantidad: bq6,
        unidad: 'm2',
        precio: pvp6,
        total: (pvp6 * bq6).toFixed(2),
      };
      val.push(u5);
    }

    let bq7= 0
    if (flagMaestra == true) {
      nuewRount = Math.round(blq20sbtCantidad * 2) / 2;
      bq7 = nuewRount ;
    } else {
      bq7 = blq20sbtCantidad;
    }

    if (flag7 === true) {
      let u6 = {
        detalle: 'BLOQUE PREFABRICADO BKR 20 MPA SIN BISEL TINTURADO',
        cantidad: bq7,
        unidad: 'm2',
        precio: pvp7,
        total: (bq7 * pvp7).toFixed(2),
      };
      val.push(u6);
    }

    let bq8= 0
    if (flagMaestra == true) {
      nuewRount = Math.round(blq20cbtCantidad * 2) / 2;
      bq8 = nuewRount ;
    } else {
      bq8 = blq20cbtCantidad;
    }


    if (flag8 === true) {
      let u7 = {
        detalle: 'BLOQUE PREFABRICADO BKR 20 MPA CON BISEL TINTURADO',
        cantidad: bq8,
        unidad: 'm2',
        precio: pvp8,
        total: (bq8 * pvp8).toFixed(2),
      };
      val.push(u7);
    }

    prod = await this.productService.findProduct('DINTEL CONCRETO ARMADO');
    pvpdintel = (dintel1 / 100 * (parseFloat(prod[0]['PRECIO' + anio])));


    let dintel = {
      detalle: 'Dintel'.toUpperCase(),
      cantidad: dintel1 / 100,
      unidad: 'ml',
      precio: parseFloat(prod[0]['PRECIO' + anio]),
      total: pvpdintel.toFixed(2).toString(),
    };
    val.push(dintel);


    //console.log("dsadasdasdasdasdasd-----d-as-d-sd-s--ds", m2Maestra)
    let unidadesM = parseInt(((m2Maestra/8.09)* 144).toString())
    let resultadoCalculoGrout = (((unidadesM * 15)/144));

    prod = await this.productService.findProduct('GROUT ESTRUCTURAL ESTANDAR');
    let pvpNiv = (parseInt(resultadoCalculoGrout.toString()) * (parseFloat(prod[0]['PRECIO' + anio])));

    let nivel = {
      detalle: 'Grout de Nivelación'.toUpperCase(),
      cantidad: parseInt(resultadoCalculoGrout.toString()),
      unidad: 'SACOS 25KG',
      precio: parseFloat(prod[0]['PRECIO' + anio]),
      total: pvpNiv.toFixed(2).toString(),
    };
    val.push(nivel);


    if (flag1 === true || flag2 === true || flag3 === true || flag4 === true) {
      let resultadoCalculo = ((((bq1 + bq2 + bq3 + bq4) / 8.09)) );
      let cantidadMaestra2 = (resultadoCalculo);
      let resultadoCalculoGrout = Math.ceil(((cantidadMaestra2 * 11.33)));

      prod = await this.productService.findProduct('GROUT ESTRUCTURAL ESTANDAR');
      let pvpest = (resultadoCalculoGrout * (parseFloat(prod[0]['PRECIO' + anio])));

      let estandar = {
        detalle: 'Grout Estructural Estandar'.toUpperCase(),
        cantidad: resultadoCalculoGrout,
        unidad: 'SACO 25KG',
        precio: parseFloat(prod[0]['PRECIO' + anio]),
        total: pvpest.toFixed(2).toString(),
      };
      val.push(estandar);
    } else {

      let resultadoCalculoP = ((((bq5 + bq6 + bq7 + bq8) / 8.09)) );
      let cantidadMaestra2P = (resultadoCalculoP);
      let resultadoCalculoGrout = Math.ceil(((cantidadMaestra2P * 11.33)));

      prod = await this.productService.findProduct('GROUT ESTRUCTURAL ESTANDAR');
      let pvpestP = (resultadoCalculoGrout * (parseFloat(prod[0]['PRECIO' + anio])));


      let estandarPlus = {
        detalle: 'Grout Estructural Plus'.toUpperCase(),
        cantidad: resultadoCalculoGrout,
        unidad: 'SACOS 25KG',
        precio: parseFloat(prod[0]['PRECIO' + anio]),
        total: pvpestP.toFixed(2).toString(),
      };
      val.push(estandarPlus);
    }
    let totalS = 0;
    for (let x in val) {
      //console.log(val[x].total);
      totalS += parseFloat(val[x].total);//Ahora que es un objeto javascript, tiene propiedades
    }

    //console.log('total', totalS);

    let descuento = (totalS * parseFloat(createRegionDto.descuento) / 100);
    let iva = totalS * 0.05;

    valFinal = {
      subtotal: totalS,
      descuento: descuento,
      iva: iva,
      total: ((totalS) - (descuento)) + iva,
      detalle: val,
      dinteles: detalle,
      project: createRegionDto.project,
    };

    //console.log(valFinal);

    return this.permissionModel.create(valFinal);
  }

  async findAll(): Promise<OrderProduct[]> {
    return this.permissionModel.find().exec();
  }

  async findOne(id: string): Promise<OrderProduct> {
    return this.permissionModel.findOne({ _id: id }).exec();
  }

  async findOneProject(id: string): Promise<OrderProduct> {
    return this.permissionModel.findOne({ project: id }).exec();
  }

  async findModule(id: string): Promise<OrderProduct> {
    return this.permissionModel.findOne({ modelu: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateOrderProductDto): Promise<OrderProduct> {
    return this.permissionModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.permissionModel.findByIdAndDelete({ _id: id }).exec();
  }


}
