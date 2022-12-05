import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { fillObject } from '@task-force/core';
import { TaskTagService } from './task-tag.service';
import CreateTaskTagDto from './dto/create-task-tag.dto';
import TaskTagRdo from './rdo/task-tag.rdo';

@Controller('tags')
export class TaskTagController {
  constructor(
    private taskTagService: TaskTagService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const tagId = parseInt(id, 10);
    const existTag = await this.taskTagService.getTagById(tagId);
    return fillObject(TaskTagRdo, existTag);
  }

  @Get('/')
  async index() {
    const tags = await this.taskTagService.getTags();
    return fillObject(TaskTagRdo, tags);
  }

  @Post('/')
  async create(@Body() dto: CreateTaskTagDto) {
    const newTag = await this.taskTagService.create(dto);
    return fillObject(TaskTagRdo, newTag);
  }
}
