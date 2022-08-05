import { NestFactory } from '@nestjs/core';
import {Res, Req} from '@nestjs/common';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {Request, Response} from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  const configService  = app.get(ConfigService)
  


  // api health check
  app.use('/', (req: Request, res: Response) => {
    res.send('🚀 Faith Ugbeshe has completed the Topup Mama Assessment. This Health Check endpoint shows that all apis works as expected. 🚀');
    
  }
  )

  await app.listen(+configService.get('APP_PORT'), ()=> console.log());
}
bootstrap();
