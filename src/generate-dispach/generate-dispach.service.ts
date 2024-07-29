import { Injectable } from '@nestjs/common';
import { CreateGenerateDispachDto } from './dto/create-generate-dispach.dto';
import { PurchaseOrderService } from '../purchase-order/purchase-order.service';
import { InjectModel, Prop } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { GenerateDispach, GenerateDispachDocument } from './schema/generate-dispach.schema';
import { OrderProductService } from '../order-product/order-product.service';
import { ProyectService } from '../proyect/proyect.service';
import { EmailService } from '../service/email.service';
import { BoardCanvaService } from '../board-canva/board-canva.service';
import { ProductService } from '../product/product.service';

import { UpdateBoardCanvaDto } from '../board-canva/dto/update-board-canva.dto';

@Injectable()
export class GenerateDispachService {
  constructor(
    private purchaseService: PurchaseOrderService,
    private generateService: OrderProductService,
    private projectService: ProyectService,
    private emailService: EmailService,
    private boarService: BoardCanvaService,
    private productService: ProductService,
    @InjectModel(GenerateDispach.name) private generateDispachModel: Model<GenerateDispachDocument>,
  ) {
  }

  weekFormat: string[] = [];

  create(createGenerateDispachDto: CreateGenerateDispachDto) {
    return 'This action adds a new generateDispach';
  }

  findFile() {
    return this.generateDispachModel.find();
  }

  findModule(moduleId: any) {
    return this.generateDispachModel.find({ module: moduleId });
  }

  findGuideId(id: any) {
    return this.generateDispachModel.find({ _id: id });
  }


  async findAll(project, module: any, tonelaje) {
    let model = await this.purchaseService.findOrderProject(module);
    let s: any = [];
    let guide = await this.findModule(module);
    let id;
    let prod;
    if (guide.length < 1) {
      for (const dev of model) {
        if (dev.status !== 'Finalizado' && dev.section[0].titulo === 'SECCION 2') {

          s = {
            enviar: [],
            enviarPosible: dev.section[0].detalles,
          };

          id = await this.findGuide(project, module, s);
          // await this.purchaseService.update(dev._id.toHexString(), dev);

        } else {
          if ((dev.status !== 'Finalizado' && dev.section[0].titulo === 'SECCION 4') && (dev.status !== 'Finalizado' && dev.section[0].titulo === 'SECCION 2')) {
            s = this.sendProduct(dev.section[0].detalles, tonelaje);
            dev.section[0].detalles.forEach(val => {
              if (s.enviar.length > 0) {

              }
              s.enviar.forEach(tes => {
                if (val === tes) {
                  val.estadoPedido = true;
                  val.peso = tes.peso;
                  val.cantidad = tes.cantidad;
                }
              });
              s.enviarPosible.forEach(pos => {
                if (val === pos) {
                  val.estadoPedido = false;
                  val.cantidad = pos.cantidad;
                  val.peso = pos.peso;
                  val.cantidad = pos.cantidad;
                }
              });
            });
            s = {
              enviar: [],
              enviarPosible: dev.section[0].detalles,
            };
            id = await this.findGuide(project, module, s);
            //await this.purchaseService.update(dev._id.toHexString(), dev);
          } else {
            if ((dev.status !== 'Finalizado' && dev.section[0].titulo === 'SECCION 6') && (dev.status !== 'Finalizado' && dev.section[0].titulo === 'SECCION 4')) {
              s = this.sendProduct(dev.section[0].detalles, tonelaje);
              dev.section[0].detalles.forEach(val => {
                s.enviar.forEach(tes => {
                  if (val === tes) {
                    val.estadoPedido = true;
                    val.peso = tes.peso;
                    val.cantidad = tes.cantidad;
                  }
                });
                s.enviarPosible.forEach(pos => {
                  if (val === pos) {
                    val.estadoPedido = false;
                    val.cantidad = pos.cantidad;
                    val.peso = pos.peso;
                    val.cantidad = pos.cantidad;
                  }
                });
              });
              s = {
                enviar: [],
                enviarPosible: dev.section[0].detalles,
              };
              id = await this.findGuide(project, module, s);
              //await this.purchaseService.update(dev._id.toHexString(), dev);
            } else {
              if (dev.status !== 'Finalizado' && dev.section[0].titulo === 'SECCION 8') {
                s = this.sendProduct(dev.section[0].detalles, tonelaje);
                dev.section[0].detalles.forEach(val => {
                  s.enviar.forEach(tes => {
                    if (val === tes) {
                      val.estadoPedido = true;
                      val.peso = tes.peso;
                      val.cantidad = tes.cantidad;
                    }
                  });
                  s.enviarPosible.forEach(pos => {
                    if (val === pos) {
                      val.estadoPedido = false;
                      val.peso = pos.peso;
                      val.cantidad = pos.cantidad;
                    }
                  });
                });
                s = {
                  enviar: [],
                  enviarPosible: dev.section[0].detalles,
                };
                await this.findGuide(project, module, s);
                //  await this.purchaseService.update(dev._id.toHexString(), dev);
              } else {
                if (dev.status !== 'Finalizado' && dev.section[0].titulo === 'SECCION 10') {
                  s = this.sendProduct(dev.section[0].detalles, tonelaje);
                  dev.section[0].detalles.forEach(val => {
                    s.enviar.forEach(tes => {
                      if (val === tes) {
                        val.estadoPedido = true;
                        val.peso = tes.peso;
                        val.cantidad = tes.cantidad;

                      }
                    });
                    s.enviarPosible.forEach(pos => {
                      if (val === pos) {
                        val.estadoPedido = false;
                        val.cantidad = pos.cantidad;
                        val.peso = pos.peso;
                        val.cantidad = pos.cantidad;
                      }
                    });
                  });
                  s = {
                    enviar: [],
                    enviarPosible: dev.section[0].detalles,
                  };
                  id = await this.findGuide(project, module, s);
                  // await this.purchaseService.update(dev._id.toHexString(), dev);
                }
              }
            }
          }
        }

      }
    } else {
      //console.log(guide[guide.length - 1].porEnviar)
      //
      s = this.sendProduct(guide[guide.length - 1].porEnviar, tonelaje);

      s.enviarPosible.sort(function(a, b) {
        var textA = a.order;
        var textB = b.order;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      if (s.enviar.length > 0) {
        for (const enviar of s.enviar) {

          if (enviar.descripcion.includes('MAESTRA')) {
            enviar.cantidad = Math.round(enviar.cantidad * 2) / 2;
            prod = await this.productService.findProduct('MAESTRA');
            enviar.precio = (parseFloat(prod[0]['PRECIO2024']));
            enviar.total = (enviar.cantidad * (parseFloat(prod[0]['PRECIO2024'])));
            enviar.peso = enviar.cantidad * 1700;
          }
          if (enviar.descripcion.includes('GROUT DE NIVELACIÓN MAESTRA')) {
            enviar.cantidad = Math.round(enviar.cantidad);
            prod = await this.productService.findProduct('GROUT DE NIVELACIÓN');
            enviar.precio = parseFloat(prod[0]['PRECIO2024']);
            enviar.total = (enviar.cantidad * (parseFloat(prod[0]['PRECIO2024'])));
            enviar.peso = enviar.cantidad * 25;
          }
          if (enviar.descripcion.includes('MAMPUESTO ESTRUCTURAL BKR 12 MPA')) {
            enviar.cantidad = Math.round(enviar.cantidad * 2) / 2;
            prod = await this.productService.findProduct('BLOQUE PREFABRICADO BKR 12 MPA SIN BISEL');
            enviar.precio = (parseFloat(prod[0]['PRECIO2024']));
            enviar.total = (enviar.cantidad * (parseFloat(prod[0]['PRECIO2024'])));
            enviar.peso = enviar.cantidad * 1700;
          }
          if (enviar.descripcion.includes('MAMPUESTO ESTRUCTURAL BKR 20 MPA')) {
            enviar.cantidad = Math.round(enviar.cantidad * 2) / 2;
            prod = await this.productService.findProduct('BLOQUE PREFABRICADO BKR 20 MPA SIN BISEL');
            enviar.precio = (parseFloat(prod[0]['PRECIO2024']));
            enviar.total = (enviar.cantidad * (parseFloat(prod[0]['PRECIO2024'])));
            enviar.peso = enviar.cantidad * 1700;
          }

          if (enviar.descripcion.includes('GROUT ESTRUCTURAL ESTANDAR')) {
            enviar.cantidad = Math.round(enviar.cantidad);
            prod = await this.productService.findProduct('GROUT ESTRUCTURAL ESTANDAR');
            enviar.precio = (parseFloat(prod[0]['PRECIO2024']));
            enviar.total = (enviar.cantidad * (parseFloat(prod[0]['PRECIO2024'])));
            enviar.peso = enviar.cantidad * 25;
          }
          if (enviar.descripcion.includes('GROUT ESTRUCTURAL PLUS')) {
            enviar.cantidad = Math.round(enviar.cantidad);
            prod = await this.productService.findProduct('GROUT ESTRUCTURAL PLUS');
            enviar.precio = (parseFloat(prod[0]['PRECIO2024']));
            enviar.total = (enviar.cantidad * (parseFloat(prod[0]['PRECIO2024'])));
            enviar.peso = enviar.cantidad * 25;
          }
          if (enviar.descripcion.includes('DINTEL CONCRETO ARMADO')) {
            prod = await this.productService.findProduct('DINTEL CONCRETO ARMADO');
            enviar.precio = (parseFloat(prod[0]['PRECIO2024']));
            enviar.total = (enviar.cantidad * (parseFloat(prod[0]['PRECIO2024'])));
            enviar.peso = enviar.cantidad * 200;
          }

          if (enviar.descripcion.includes('MORTERO SELLADOR DE MUROS - BOONKER SEAL ESTÁNDAR')) {
            prod = await this.productService.findProduct('MORTERO SELLADOR DE MUROS - BOONKER SEAL ESTÁNDAR');
            enviar.precio = (parseFloat(prod[0]['PRECIO2024']));
            enviar.total = (enviar.cantidad * (parseFloat(prod[0]['PRECIO2024'])));
            enviar.peso = enviar.cantidad * 25;
          }

        }
        s.enviarPosible.splice(0, 2);
      }


      id = await this.findGuide(project, module, s);

    }

    return { s, id: id._id };
  }


  sendProduct(seccion, tonelaje) {


    let pesoAcumulado = 0;
    let enviar = [];
    let enviarPosible = [];
    let enviarPosiblef = [];
    let pesoSobranteVehiculo = 0;
    let restarPalet = 0; // peso palet
    let cantidadPalet = 0;
    let palestCantidadBloque = 0;
    let nuevoPesoPalet = 0;
    let nuevoPeso = 0;

    let cantidadM2 = 0;

    let nuevoGrout = 0;

    seccion.forEach((item: any) => {


      if (item.estadoPedido === false) {

        if (item.descripcion === 'GROUT DE NIVELACIÓN MAESTRA') {
          item.peso = item.cantidad * 25;
        }
        //console.log("itemmmm",item.cantidad, item.peso);
        pesoAcumulado += item.peso;

        //console.log("peso",pesoAcumulado);

        if (pesoAcumulado <= tonelaje) {
          //console.log("item interno",item);
          item.estadoPedido = true;
          enviar.push(item);
        } else {
          enviarPosible.push(item);
        }
      }

    });


    let pesoCargado = enviar.reduce((sum, value) => (typeof value.peso == 'number' ? sum + value.peso : sum), 0);

    //console.log(pesoCargado, "pesocargado")

    let auxEnviar = enviarPosible;
    if (enviarPosible.length > 0) {
      pesoSobranteVehiculo = tonelaje - pesoCargado;

      //console.log("peso sobrante",pesoSobranteVehiculo);

      if (pesoSobranteVehiculo < 0) {
        //console.log(pesoSobranteVehiculo);
        pesoSobranteVehiculo = 0;
      }

      // Si toca mandar manpuesto y no alcanza el vehiculo, se resta un palet de mpa y se agrega el grot respectivo
      if (enviarPosible[0].descripcion.toString().includes('MPA')) {


        if (pesoSobranteVehiculo > 0) {
          restarPalet = pesoSobranteVehiculo - 2800; // peso palet
        }

        if (restarPalet > 0) {
          cantidadPalet = restarPalet / 1700;
          palestCantidadBloque = Math.round(cantidadPalet);
          nuevoPesoPalet = palestCantidadBloque * 1700;
          nuevoPeso = pesoSobranteVehiculo - (nuevoPesoPalet);
          cantidadM2 = palestCantidadBloque * 8.09;
          nuevoGrout = Math.round(cantidadM2 * 1.35);
          if (nuevoGrout < 60) {
            nuevoGrout = 60;
          }

          let nuevoPesoGrout = nuevoGrout * 25;
          let pesoSobrantempa = enviarPosible[0].peso - (palestCantidadBloque * 1700);
          console.log('enviar Posible => ', enviarPosible)
          if (enviarPosible[0].descripcion.toString().includes('MPA')) {

            let nuevJson = {
              order: enviarPosible[0].order,
              descripcion: enviarPosible[0].descripcion,
              unidades: enviarPosible[0].unidades,
              cantidad: Math.round(pesoSobrantempa / 1700),
              m2: cantidadM2,
              precio: enviarPosible[0].precio,
              total: enviarPosible[0].total,
              peso: palestCantidadBloque * 1400,
              estadoPedido: true,
              sobrante: '',
              despachado: 0,

            };

            let nuevJsonE = {
              order: enviarPosible[0].order,
              descripcion: enviarPosible[0].descripcion,
              unidades: enviarPosible[0].unidades,
              cantidad: palestCantidadBloque,
              m2: cantidadM2,
              precio: enviarPosible[0].precio,
              total: enviarPosible[0].total,
              peso: palestCantidadBloque * 1400,
              estadoPedido: true,
              sobrante: '',
              despachado: 0,

            };
            enviar.push(nuevJsonE);


            enviarPosible.push(nuevJson);


            enviarPosible[0].cantidad = enviarPosible[0].cantidad - (palestCantidadBloque * 1400);


          }
          if (enviarPosible[1].descripcion.toString().includes('GROUT')) {
            console.log('enviar Grout ', enviarPosible)
            let nuevJson = {
              order: enviarPosible[1].order,
              descripcion: enviarPosible[1].descripcion,
              unidades: enviarPosible[1].unidades,
              cantidad: nuevoGrout,
              m2: nuevoGrout * 1.4,
              precio: enviarPosible[0].precio,
              total: enviarPosible[0].total,
              peso: nuevoGrout * 25,
              estadoPedido: false,
              sobrante: '',
              despachado: 0,

            };
            let nuevJsonE = {
              order: enviarPosible[1].order,
              descripcion: enviarPosible[1].descripcion,
              unidades: enviarPosible[1].unidades,
              cantidad: palestCantidadBloque * 11.33,
              m2: '',
              precio: enviarPosible[0].precio,
              total: enviarPosible[0].total,
              peso: (palestCantidadBloque * 11.33) * 25,
              estadoPedido: false,
              sobrante: '',
              despachado: false,

            };
            enviar.push(nuevJsonE);
            enviarPosible.push(nuevJson);
            let groutFaltanteM2 = enviarPosible[0] - cantidadPalet;
            let cantidadM2 = groutFaltanteM2 * 8.08;
            let groutFaltante = Math.round(cantidadM2 * 1.35);

            enviarPosible[0].cantidad = enviarPosible[0].cantidad - cantidadPalet;


            if (enviarPosible[0].cantidad < 0) {
              enviarPosible[0].estadoPedido = true;
            }


          }

        } else {
          //console.log("entro aqui-----------", seccion);
          enviarPosible = seccion;
        }


        return {
          enviar: enviar,
          enviarPosible: enviarPosible,

        };

      }

    }

    let enviarPosiblef2 = enviarPosiblef.filter((data, index, j) =>
      index === j.findIndex((t) => (t.order === data.order && t.descripcion === data.descripcion)),
    );


    console.log('no existekkkkk', enviarPosiblef2);

    return {
      enviar: enviar,
      enviarPosible: enviarPosiblef2,

    };

  }


  async findGuide(project: any, module: any, service: any) {


    let generic = await this.generateService.findOneProject(project);
    let projectData = await this.projectService.findOne(project);

    let moduleId = projectData.module;


    let newJson = {
      enviado: '',
      porEnviar: '',
      date: '',
      detalle: [],
      observation: '',
      module: '',
      status: false,
      guide: '',
      active: false,
    };


    moduleId.forEach(mod => {
      if (mod._id.toHexString() === module) {
        service.enviar.forEach(val => {
          generic.detalle.forEach((gene: any) => {

            if (gene.detalle.toUpperCase().includes('DINTEL') && val.descripcion.toUpperCase().includes('DINTEL')) {
              gene.cantidad = gene.cantidad - val.cantidad;


            }
            if (gene.detalle.toUpperCase().includes('MAESTRA') && val.descripcion.toUpperCase().includes('MAESTRA')) {
              gene.cantidad = gene.cantidad - val.cantidad;


            }
            if (gene.detalle.toUpperCase().includes('NIVELACION') && val.descripcion.toUpperCase().includes('NIVELACION')) {
              gene.cantidad = gene.cantidad - val.cantidad;
            }
            if (gene.detalle.toUpperCase().includes('12 MPA') && val.descripcion.toUpperCase().includes('12 MPA')) {
              gene.cantidad = gene.cantidad - val.cantidad;

            }
            if (gene.detalle.toUpperCase().includes('20 MPA') && val.descripcion.toUpperCase().includes('20 MPA')) {
              gene.cantidad = gene.cantidad - val.cantidad;

            }
            if (gene.detalle.toUpperCase().includes('SEAL') && val.descripcion.toUpperCase().includes('SEAL')) {
              gene.cantidad = gene.cantidad - val.cantidad;

            }
            if (gene.detalle.toUpperCase().includes('FINISH') && val.descripcion.toUpperCase().includes('FINISH')) {
              gene.cantidad = gene.cantidad - val.cantidad;

            }
            if (gene.detalle.toUpperCase().includes('SEAL ESTANDAR') && val.descripcion.toUpperCase().includes('SEAL ESTANDAR')) {
              gene.cantidad = gene.cantidad - val.cantidad;

            }
            if (gene.detalle.toUpperCase().includes('SEAL PLUS') && val.descripcion.toUpperCase().includes('SEAL PLUS')) {
              gene.cantidad = gene.cantidad - val.cantidad;
            }

            newJson.detalle.push(gene);

          });
        });

      }

    });

    var qcache = {};
    var nuevo = newJson.detalle.reverse().filter(e => {
      return e.detalle ? (qcache[e.detalle] ? false : qcache[e.detalle] = 1) : true;
    }).reverse();

    newJson.detalle = nuevo;
    newJson.enviado = service.enviar;
    newJson.porEnviar = service.enviarPosible;
    newJson.enviado = service.enviar;
    newJson.enviado;
    newJson.date = new Date().toISOString();
    newJson.module = module;
    newJson.status = true;
    let i = 0;
    i = i + 1;
    newJson.guide = 'Guia ' + i;

    let mail = {
      email: 'jcarrillo@boonkerconstrucciones.com;emontaluisa@boonkerconstrucciones.com; gburbano@boonkerconstrucciones.com; ggamboa@boonkerconstrucciones.com',
      project: projectData,
    };
    await this.emailService.sendNotificacionCarga(mail, 'Verificación de Generación de Orden de Despacho');
    return await this.generateDispachModel.create(newJson);

  }

  async updateSE(id: any, idProject: string) {

    console.log('idProject', typeof idProject);


    let project: any = await this.projectService.findOne(idProject);

    let updateRegionDto = {
      status: 'Pendiente de aprobación Finanzas',
    };
    let mail = {
      email: 'jcarrillo@boonkerconstrucciones.com;emontaluisa@boonkerconstrucciones.com; gburbano@boonkerconstrucciones.com; ggamboa@boonkerconstrucciones.com; carias@boonkerconstrucciones.com; freyna@boonkerconstrucciones.com',
      project: project.name,
    };
    await this.emailService.sendNotificacionCargaF(mail, 'Aprobar Despacho');
    return this.generateDispachModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }


  async updateCliente(id: any) {


    let updateRegionDto = {
      status: 'Pagada por el Cliente',
    };
    let mail = {
      email: 'jcarrillo@boonkerconstrucciones.com;emontaluisa@boonkerconstrucciones.com',

    };
    await this.emailService.sendNotificacionCargaPago(mail, 'Realizar pago');
    return this.generateDispachModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async updateFinanzas(id: any, idProject: string, pago) {
    let project: any = await this.projectService.findOne(idProject);

    await this.emailService.sendNotificacionCargaPago({
      email: 'jcarrillo@boonkerconstrucciones.com; emontaluisa@boonkerconstrucciones.com; gburbano@boonkerconstrucciones.com; ggamboa@boonkerconstrucciones.com; freyna@boonkerconsgtrucciones.com; carias@boonkerconstrucciones.com',
      project: project,
      pago: pago
    }, 'Despacho aprobado para  el Pago');
    let updateRegionDto = {
      status: 'Aprobado por Finanzas',
    };
    await this.generateDispachModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async updatePago(id: any, idProject: string, pago) {
    let project: any = await this.projectService.findOne(idProject);


     await this.emailService.sendNotificacionPagodoByCliente({ email: 'jcarrillo@boonkerconstrucciones.com; emontaluisa@boonkerconstrucciones.com; ' , pago , project}, 'Pagado por el cliente');
    let updateRegionDto = {
      status: 'Pagado',
    };

    await this.cargarData(id, project);


    await this.generateDispachModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });


  }


  async cargarData(id, idProject) {

    let data: any = await this.findGuideId(id);
    let fechaSincronizacion = new Date().setDate(new Date().getDate() + 7);
    console.log(fechaSincronizacion);
    let project: any = await this.projectService.findOne(idProject);

    console.log(data[0].enviado);

    let enviado = data[0].enviado;

    let block = [];

    let grout = [];
    let morteros = [];
    let dintel = [];


    enviado.forEach(element => {
      if (element.descripcion.includes('10 MPA SIN BISEL')) {
        block = [{
          detalle: '10 Sin Bisel',
          m2: '8.08',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        }];
      }
      if (element.descripcion.includes('10 MPA CON BISEL')) {
        block.push({
          detalle: '10 Con Bisel',
          m2: '8.08',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }

      if (element.descripcion.includes('12 MPA SIN BISEL')) {
        block.push({
          detalle: '12 Sin Bisel',
          m2: '8.08',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }
      if (element.descripcion.includes('12 MPA CON BISEL')) {
        block.push({
          detalle: '12 Con Bisel',
          m2: '8.08',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }


      if (element.descripcion.includes('20 SIN BISEL')) {
        block.push({
          detalle: '20 Sin Bisel',
          m2: '8.08',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }
      if (element.descripcion.includes('20 CON BISEL')) {
        block.push({
          detalle: '20 Con Bisel',
          m2: '8.08',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }


      if (element.descripcion.includes('25 SIN BISEL')) {
        block.push({
          detalle: '25 Sin Bisel',
          m2: '8.08',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }
      if (element.descripcion.includes('25 CON BISEL')) {
        block.push({
          detalle: '25 Con Bisel',
          m2: '8.08',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }


      if (element.descripcion.includes('NIVELACION')) {
        grout = [{
          detalle: 'Nivelación',
          m2: '60',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        }];
      }
      if (element.descripcion.includes('ESTANDAR')) {
        block.push({
          detalle: 'Estandar',
          m2: '60',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }
      if (element.descripcion.includes('PLUS')) {
        block.push({
          detalle: 'Plus',
          m2: '60',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }


      if (element.descripcion.includes('SEAL ESTANDAR')) {
        morteros = [{
          detalle: 'Estandar',
          m2: '60',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        }];
      }
      if (element.descripcion.includes('SEAL PLUS')) {
        morteros.push({
          detalle: 'Plus',
          m2: '60',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }


      if (element.descripcion.includes('SEAL ESTANDAR')) {
        grout = [{
          detalle: 'Estandar',
          m2: '60',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        }];
      }
      if (element.descripcion.includes('SEAL PLUS')) {
        block.push({
          detalle: 'Plus',
          m2: '60',
          despacho: 0,
          totalDespachar: element.cantidad,
          carga: '',
          totalDespacho: '',
          novedades: '',
          comentarios: '',
        });
      }


      /*
      * "dintel": [
    {
      "detalle": "0.5",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "0.625",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "0.75",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "0.875",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "1.00",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "1.125",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "1.25",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "1.375",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "1.50",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "1.625",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "1.75",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "1.875",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "2.00",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "2.125",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "2.25",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "2.375",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "2.50",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "2.625",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "2.75",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "2.875",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "3.00",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "3.125",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "3.25",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "3.375",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    },
    {
      "detalle": "3.50",
      "m2": "1",
      "despacho": 0,
      "totalDespachar": 0,
      "carga": "",
      "totalDespacho": "",
      "novedades": "",
      "comentarios": ""
    }
  ],
      * */


    });


    let form = {
      date: new Date(),
      client: project.name,
      direction: project.location,
      driver: '',
      block: block,
      grout: grout,
      morteros: morteros,
      mpa: 0,
      morterosCat: [],
      dinteles: false,
      status: 'Confirmado',
      newBloc: false,
      confirmation: true,
      personUpdate: 'Automático',
    };

    console.log(form);
    await this.boarService.create(form);


  }

  update(id: string, updateProjectHouseDto: UpdateBoardCanvaDto) {

    return this.generateDispachModel.findOneAndUpdate({ _id: id }, updateProjectHouseDto, {
      new: true,
    });
  }


}




