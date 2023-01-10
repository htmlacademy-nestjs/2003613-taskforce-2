/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as process from 'process';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const tasksApp = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('The «Tasks» service')
    .setDescription('Tasks service API')
    .setVersion('1.0')
    .build();

  const globalPrefix = 'api';
  tasksApp.setGlobalPrefix(globalPrefix);

  const document = SwaggerModule.createDocument(tasksApp, config);
  SwaggerModule.setup('spec', tasksApp, document);

  tasksApp.useGlobalPipes(new ValidationPipe({
    transform: true,
    skipUndefinedProperties: true
  }));

  const port = process.env.PORT || 3334;
  await tasksApp.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
