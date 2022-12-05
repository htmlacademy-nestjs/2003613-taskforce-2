import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseService } from './response/response.service';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [ResponseModule],
  controllers: [AppController],
  providers: [AppService, ResponseService],
})
export class AppModule {}
