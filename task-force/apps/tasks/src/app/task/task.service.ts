import { Injectable } from '@nestjs/common';
import { TaskStatus } from '@task-force/shared-types';
import { TaskTagRepository } from '../task-tag/task-tag.repository';
import CreateTaskDto from './dto/create-task.dto';
import UpdateTaskDto from './dto/update-task.dto';
import { TaskEntity } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {

  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly tagRepository: TaskTagRepository
  ) {}

  async create(dto: CreateTaskDto) {
    const taskTags = (dto?.tags?.length)
    ? await this.tagRepository.find([...dto.tags])
    : [];
    const date = new Date(dto.dueDate);
    const taskEntity = new TaskEntity({ ...dto, dueDate: date, tags: taskTags, status: TaskStatus.New});
    return this.taskRepository.create(taskEntity);
  }

  async get() {
    return this.taskRepository.find();
  }

  async getById(id: number) {
    return this.taskRepository.findById(id);
  }

  async update(id: number, dto: UpdateTaskDto) {
    const {
      status,
    } = dto;
    const task = await this.taskRepository.findById(id);
    const taskEntity = new TaskEntity({...task, status});
    return this.taskRepository.update(id, taskEntity);
  }

  async delete(taskId: number) {
    await this.taskRepository.destroy(taskId);
  }

}
