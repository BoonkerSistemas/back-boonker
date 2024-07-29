import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from './jwt.service';


@Injectable()
export class EmailService {
  nodemailer;
  private transporter;
  private mailOptions;
  private FROM = 'notificaciones@boonkerconstrucciones.com';
  private hbs;

  constructor(
    private readonly jwtService: JwtService,
  ) {
    this.hbs = require('nodemailer-handlebars');
    this.nodemailer = require('nodemailer');

    this.transporter = this.nodemailer.createTransport({
      host: 'vidar.edeinternet.net',
      port: 587,
      security: false,
      auth: {
        user: 'jcarrillo@boonkerconstrucciones.com',
        pass: 't278JQdEr',
      },
    });


    this.mailOptions = {};

  }

  async sendEmailPassword(data, subject1) {
    try {
      await this.nodemailer.createTestAccount();
      let codigo = Math.floor((Math.random() * (99999)) + 999999).toString();
      const transporter = this.nodemailer.createTransport({
        host: 'vidar.edeinternet.net',
        port: 587,
        security: false,
        auth: {
          user: 'jcarrillo@boonkerconstrucciones.com',
          pass: 't278JQdEr',
        },
      });

      transporter.use('compile', this.hbs({
        viewEngine: {
          extname: '.hbs', // handlebars extension
          partialsDir: 'src/views',
          layoutsDir: 'src/views/layouts',
          defaultLayout: 'index',
        },
        viewPath: 'src/views',
        extName: '.hbs',
      }));

      const token = this.jwtService.emitirTokenRegister({
        url: process.env['URL'],
      });

      const mailOptions = {
        from: this.FROM,
        to: data.email,
        subject: subject1,
        template: 'index',
        context: {
          correo: data.email,
          codigo: codigo,
          url: 'http://localhost:4200/clientes',
        },

      };
      const info = await transporter.sendMail(mailOptions);

      return info;
    } catch (error) {
      //////console.log(error);
      throw new HttpException('¡Error al intentar enviar el correo de para recuperación de contraseña!', HttpStatus.FORBIDDEN);
    }
  }


  async sendInforme(data, subject1, file) {
    try {
      //console.log(data)
      await this.nodemailer.createTestAccount();
      const transporter = this.nodemailer.createTransport({
        host: 'vidar.edeinternet.net',
        port: 587,
        security: false,
        auth: {
          user: 'jcarrillo@boonkerconstrucciones.com',
          pass: 't278JQdEr',
        },
      });

      transporter.use('compile', this.hbs({
        viewEngine: {
          extname: '.hbs', // handlebars extension
          partialsDir: 'src/views',
          layoutsDir: 'src/views/layouts',
          defaultLayout: 'indexMail',
        },
        viewPath: 'src/views',
        extName: '.hbs',
      }));


      const mailOptions = {
        from: this.FROM,
        to: data.email,
        subject: subject1,
        template: 'index',
        context: {
          correo: data.email,
          data: data,
        },
        attachments: [
          {   // use URL as an attachment
            filename: 'VisitaObra.pdf',
            path: file,
          },

        ],

      };
      const info = await transporter.sendMail(mailOptions);

      return info;
    } catch (error) {
      //console.log(error);
      throw new HttpException('¡Error al intentar enviar el correo de para recuperación de contraseña!', HttpStatus.FORBIDDEN);
    }
  }

  async sendNotificacionCarga(data, subject1) {
    try {
      console.log(data)
      await this.nodemailer.createTestAccount();
      const transporter = this.nodemailer.createTransport({
        host: 'vidar.edeinternet.net',
        port: 587,
        security: false,
        auth: {
          user: 'jcarrillo@boonkerconstrucciones.com',
          pass: 't278JQdEr',
        },
      });

      transporter.use('compile', this.hbs({
        viewEngine: {
          extname: '.hbs', // handlebars extension
          partialsDir: 'src/views',
          layoutsDir: 'src/views/layouts',
          defaultLayout: 'indexNotificacionDespacho',
        },
        viewPath: 'src/views',
        extName: '.hbs',
      }));


      const mailOptions = {
        from: this.FROM,
        to: data.email,
        subject: subject1,
        template: 'index',
        context: {
          correo: data.email,
          nombre: data?.project?.personResponsible[0]? data.project.personResponsible[0]: "",
          proyecto: data.project.name,
        },

      };
      const info = await transporter.sendMail(mailOptions);

      return info;
    } catch (error) {
      console.log(error);
      throw new HttpException('¡Error al intentar enviar el correo !', HttpStatus.FORBIDDEN);
    }
  }

  async sendNotificacionCargaF(data, subject1) {
    try {
      //console.log(data)
      await this.nodemailer.createTestAccount();
      const transporter = this.nodemailer.createTransport({
        host: 'vidar.edeinternet.net',
        port: 587,
        security: false,
        auth: {
          user: 'jcarrillo@boonkerconstrucciones.com',
          pass: 't278JQdEr',
        },
      });

      transporter.use('compile', this.hbs({
        viewEngine: {
          extname: '.hbs', // handlebars extension
          partialsDir: 'src/views',
          layoutsDir: 'src/views/layouts',
          defaultLayout: 'indexNotificacionDespacho',
        },
        viewPath: 'src/views',
        extName: '.hbs',
      }));


      const mailOptions = {
        from: this.FROM,
        to: data.email,
        subject: subject1,
        template: 'index',
        context: {
          correo: data.email,
          nombre: "Finanzas",
          proyecto: data.project,
        },

      };
      const info = await transporter.sendMail(mailOptions);

      return info;
    } catch (error) {
      //console.log(error);
      throw new HttpException('¡Error al intentar enviar el correo de para recuperación de contraseña!', HttpStatus.FORBIDDEN);
    }
  }


  async sendNotificacionCargaPago(data, subject1) {
    try {
      //console.log(data)
      await this.nodemailer.createTestAccount();
      const transporter = this.nodemailer.createTransport({
        host: 'vidar.edeinternet.net',
        port: 587,
        security: false,
        auth: {
          user: 'jcarrillo@boonkerconstrucciones.com',
          pass: 't278JQdEr',
        },
      });

      transporter.use('compile', this.hbs({
        viewEngine: {
          extname: '.hbs', // handlebars extension
          partialsDir: 'src/views',
          layoutsDir: 'src/views/layouts',
          defaultLayout: 'indexNotificacionDespachoPagoCliente',
        },
        viewPath: 'src/views',
        extName: '.hbs',
      }));

      let date = new Date();
      let pay = new Date().setDate(date.getDate()+3)

      const mailOptions = {
        from: this.FROM,
        to: data.email,
        subject: subject1,
        template: 'index',
        context: {
          project: data.project.name,
          cliente: data?.project?.personResponsible[0]? data.project.personResponsible[0]: "",
          pago: data.pago,
          fecha: new Date(pay).toLocaleString(),

        },

      };
      const info = await transporter.sendMail(mailOptions);

      return info;
    } catch (error) {
      //console.log(error);
      throw new HttpException('¡Error al intentar enviar el correo de para recuperación de contraseña!', HttpStatus.FORBIDDEN);
    }
  }

  async sendNotificacionPagodoByCliente(data, subject1) {
    try {
      //console.log(data)
      await this.nodemailer.createTestAccount();
      const transporter = this.nodemailer.createTransport({
        host: 'vidar.edeinternet.net',
        port: 587,
        security: false,
        auth: {
          user: 'jcarrillo@boonkerconstrucciones.com',
          pass: 't278JQdEr',
        },
      });

      transporter.use('compile', this.hbs({
        viewEngine: {
          extname: '.hbs', // handlebars extension
          partialsDir: 'src/views',
          layoutsDir: 'src/views/layouts',
          defaultLayout: 'indexNotificacionPagoPorCliente',
        },
        viewPath: 'src/views',
        extName: '.hbs',
      }));


      const mailOptions = {
        from: this.FROM,
        to: data.email,
        subject: subject1,
        template: 'index',
        context: {
          project: data.project.name,
          cliente: data?.project?.personResponsible[0]? data.project.personResponsible[0]: "",
          pago: data.pago,
          fecha: new Date().toLocaleString()

        },

      };
      const info = await transporter.sendMail(mailOptions);

      return info;
    } catch (error) {
      //console.log(error);
      throw new HttpException('¡Error al intentar enviar el correo de para recuperación de contraseña!', HttpStatus.FORBIDDEN);
    }
  }


  async sendPassword(data, subject1) {
    try {
      await this.nodemailer.createTestAccount();

      const transporter = this.nodemailer.createTransport({
        host: 'vidar.edeinternet.net',
        port: 587,
        security: false,
        auth: {
          user: 'jcarrillo@boonkerconstrucciones.com',
          pass: 't278JQdEr',
        },
      });

      transporter.use('compile', this.hbs({
        viewEngine: {
          extname: '.hbs', // handlebars extension
          partialsDir: 'src/views',
          layoutsDir: 'src/views/layouts',
          defaultLayout: 'indexpassword',
        },
        viewPath: 'src/views',
        extName: '.hbs',
      }));

      const mailOptions = {
        from: this.FROM,
        to: data.email,
        subject: subject1,
        template: 'index',
        context: {
          correo: data.email,
          user: data.username,
          password: data.password1,
          url: 'https://dpvale-gestor-front-develop-xfktgfgwja-uc.a.run.app/#/sign-in',
        },

      };
      const info = await transporter.sendMail(mailOptions);

      return info;
    } catch (error) {
      //////console.log(error);
      throw new HttpException('¡Error al intentar enviar el correo de para recuperación de contraseña!', HttpStatus.FORBIDDEN);
    }
  }


  async sendPasswordFinal(data, subject1) {
    try {
      await this.nodemailer.createTestAccount();

      const transporter = this.nodemailer.createTransport({
        host: 'vidar.edeinternet.net',
        port: 587,
        security: false,
        auth: {
          user: 'jcarrillo@boonkerconstrucciones.com',
          pass: 't278JQdEr',
        },
      });

      transporter.use('compile', this.hbs({
        viewEngine: {
          extname: '.hbs', // handlebars extension
          partialsDir: 'src/views',
          layoutsDir: 'src/views/layouts',
          defaultLayout: 'indexClientFinal',
        },
        viewPath: 'src/views',
        extName: '.hbs',
      }));

      const mailOptions = {
        from: this.FROM,
        to: data.email,
        subject: subject1,
        template: 'index',
        context: {
          correo: data.email,
          user: data.username,
          password: data.password1,
          url: 'https://dpvale-gestor-front-develop-xfktgfgwja-uc.a.run.app/#/sign-in',
        },

      };
      const info = await transporter.sendMail(mailOptions);

      return info;
    } catch (error) {
      //////console.log(error);
      throw new HttpException('¡Error al intentar enviar el correo de para recuperación de contraseña!', HttpStatus.FORBIDDEN);
    }
  }


  async sendComment(data) {

    try {

      await this.nodemailer.createTestAccount();

      const transporter = this.nodemailer.createTransport({
        host: 'vidar.edeinternet.net',
        port: 587,
        security: false,
        auth: {
          user: 'jcarrillo@boonkerconstrucciones.com',
          pass: 't278JQdEr',
        },
      });

      transporter.use('compile', this.hbs({
        viewEngine: {
          extname: '.hbs', // handlebars extension
          partialsDir: 'src/views',
          layoutsDir: 'src/views/layouts',
          defaultLayout: 'indexComment',
        },
        viewPath: 'src/views',
        extName: '.hbs',
      }));


      const mailOptions = {
        from: this.FROM,
        to: 'sbolanos@boonkerconstrucciones.com; jcarrillo@boonkerconstrucciones.com; eperez@boonkerconstrucciones.com',
        subject: 'Aceptacion de invitacion',
        template: 'index',
        context: {
          comentario: '',
          usuarioSistema: '',
          usuario: data.name,
          url: '',
        },

      };
      const info = await transporter.sendMail(mailOptions);

      return info;
    } catch (error) {
      //////console.log(error);
      throw new HttpException('¡Error al intentar enviar el correo de para recuperación de contraseña!', HttpStatus.FORBIDDEN);
    }
  }


}
