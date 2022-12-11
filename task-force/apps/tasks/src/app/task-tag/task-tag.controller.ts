import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@task-force/core';
import CreateTaskTagDto from './dto/create-task-tag.dto';
import UpdateTaskTagDto from './dto/update-task-tag.dto';
import TaskTagRdo from './rdo/task-tag.rdo';
import { TaskTagService } from './task-tag.service';

@Controller('tags')
export class TaskTagController {
  constructor(
    private tagService: TaskTagService
  ) {}

  @Post('/')
  async create(@Body() dto: CreateTaskTagDto) {
    const newTag = await this.tagService.create(dto);
    return fillObject(TaskTagRdo, newTag);
  }

  @Get('/')
  async index() {
    const categories = await this.tagService.get();
    return fillObject(TaskTagRdo, categories);
  }

  @Get('/:id')
  async show(@Param('id') id: string) {
    const tagId = parseInt(id, 10);
    const existTag = await this.tagService.getById(tagId);
    return fillObject(TaskTagRdo, existTag);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateTaskTagDto) {
    const tagId = parseInt(id, 10);
    const updatedTag = await this.tagService.update(tagId, dto)
    return fillObject(TaskTagRdo, updatedTag);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const tagId = parseInt(id, 10);
    await this.tagService.delete(tagId);
  }
}
