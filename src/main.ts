import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { ConfigService } from '@nestjs/config';
import { useContainer } from 'class-validator';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { createDocument } from './common/swagger/swagger';
import * as fs from 'node:fs';



async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./src/cert/key.pem'),
    cert: fs.readFileSync('./src/cert/cert.pem'),
  };
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('port')


  app.setGlobalPrefix('api/v1');
  useContainer(app.select(AppModule), {fallbackOnErrors: true});
  //app.useGlobalInterceptors(new TransformInterceptor());
  app.enableCors();
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  SwaggerModule.setup('api/v1/docs', app, createDocument(app), {
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    }
  });
  await app.listen(port)
  Logger.log('', 'Start')
  Logger.log(`API RUNNING: http://localhost:${port}`, 'Start')
  Logger.log('', 'Start')
}
bootstrap();
