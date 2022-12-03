import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TaskCategoryModule } from './task-category/task-category.module';

@Module({
  imports: [TaskModule, TaskCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
