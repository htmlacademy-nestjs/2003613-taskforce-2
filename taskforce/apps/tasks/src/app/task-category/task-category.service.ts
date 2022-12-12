import { Injectable } from '@nestjs/common';
import { TaskCategory } from '@taskforce/shared-types';
import CreateTaskCategoryDto from './dto/create-task-category.dto';
import UpdateTaskCategoryDto from './dto/update-task-category.dto';
import { TaskCategoryEntity } from './task-category.entity';
import { TaskCategoryRepository } from './task-category.repository';

@Injectable()
export class TaskCategoryService {

  constructor(
    private readonly categoryRepository: TaskCategoryRepository
  ) {}

  async create(dto: CreateTaskCategoryDto): Promise<TaskCategory> {
    const categoryEntity = new TaskCategoryEntity(dto);
    return this.categoryRepository.create(categoryEntity);
  };

  async get() {
    return this.categoryRepository.find();
  }

  async getById(id: number) {
    return this.categoryRepository.findById(id);
  }

  async update(id: number, dto: UpdateTaskCategoryDto): Promise<TaskCategory> {
    return this.categoryRepository.update(id, new TaskCategoryEntity(dto));
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.destroy(id);
  }
}
