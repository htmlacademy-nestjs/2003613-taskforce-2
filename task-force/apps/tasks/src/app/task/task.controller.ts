import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@task-force/core';
import CreateTaskDto from './dto/create-task.dto';
import TasksRequestDto from './dto/tasks-request.dto';
import UpdateTaskDto from './dto/update-task.dto';
import TaskRdo from './rdo/task.rdo';
import { TaskService } from './task.service';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService
  ) {}

  @Post('/')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.CREATED,
    description: 'The new task was successfully created.'
  })
  async create(dto: CreateTaskDto){
    const newTask = await this.taskService.create(dto);
    return fillObject(TaskRdo, newTask);
  }

  @Put('/:id')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'The task data has been successfully updated.'
  })
  async updateTaskData(@Param('id') id: string, dto: UpdateTaskDto){
    const updatedTask = await this.taskService.update(dto);
    return fillObject(TaskRdo, updatedTask);
  }

  @Get('/:id')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'The task is found.'
  })
  async show(@Param('id') id: number){
    const existTask = await this.taskService.getTaskById(id);
    return fillObject(TaskRdo, existTask);
  }

  @Get('/')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'The new task was successfully created.'
  })
  async getTasks(@Body() dto: TasksRequestDto){
    //WIP
    const tasks = await this.taskService.getTasks(dto);
    return fillObject(TaskRdo, tasks);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The new task was successfully created.'
  })
  async destroy(@Param('id') id: number){
    await this.taskService.delete(id);
  }
}
