import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { fillObject } from '@task-force/core';
import CreateTaskCategoryDto from './dto/create-task-category.dto';
import { TaskCategoryRdo } from './rdo/task-category.rdo';
import { TaskCategoryService } from './task-category.service';

@Controller('categories')
export class TaskCategoryController {
  constructor(
    private taskCategoryService: TaskCategoryService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const categoryId = parseInt(id, 10);
    const existCategory = await this.taskCategoryService.getCategoryById(categoryId);
    return fillObject(TaskCategoryRdo, existCategory);
  }

  @Get('/')
  async index() {
    const categories = await this.taskCategoryService.getCategories();
    return fillObject(TaskCategoryRdo, categories);
  }

  @Post('/')
  async create(@Body() dto: CreateTaskCategoryDto) {
    const newCategory = await this.taskCategoryService.create(dto);
    return fillObject(TaskCategoryRdo, newCategory);
  }
}
