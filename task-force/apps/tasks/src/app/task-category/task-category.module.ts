import { Module } from '@nestjs/common';
import { TaskCategoryController } from './task-category.controller';
import { TaskCategoryRepository } from './task-category.repository';
import { TaskCategoryService } from './task-category.service';


@Module({
  imports: [],
  providers: [TaskCategoryService, TaskCategoryRepository],
  controllers: [TaskCategoryController],
  exports: [TaskCategoryRepository],
})
export class TaskCategoryModule {}
