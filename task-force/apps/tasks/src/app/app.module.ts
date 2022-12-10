import { Module } from '@nestjs/common';
import { TaskCategoryModule } from './task-category/task-category.module';
import { TaskTagModule } from './task-tag/task-tag.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule, TaskCategoryModule, TaskTagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
