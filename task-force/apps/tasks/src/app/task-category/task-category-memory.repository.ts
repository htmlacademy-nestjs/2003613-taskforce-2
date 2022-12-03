import { CRUDRepository } from '@task-force/core';
import { TaskTag } from '@task-force/shared-types';
import { TaskCategoryEntity } from './task-category.entity';

export class TaskCategoryMemoryRepository implements CRUDRepository<TaskCategoryEntity, number, TaskTag>{
  private repository: {[key: number]: TaskTag} = {};

  public async create(item: TaskCategoryEntity): Promise<TaskTag> {
    const idValue = Object.values(this.repository).length;
    const entry = {...item.toObject(), id: idValue};
    this.repository[entry.id] = entry;

    return {...entry}
  }

  public async index(): Promise<TaskTag[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: number): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: number): Promise<TaskTag | null>{
    const entry = this.repository[id];
    if (!entry){
      return null;
    }
    return {...entry};
  }

  public async update(id: number, item: TaskCategoryEntity): Promise<TaskTag>{
    this.repository[id] = {...item.toObject(), id: id} as TaskTag;

    return this.findById(id);
  }

  public async findByTitle(categoryTitle: string): Promise<TaskTag | null> {
    const entry = Object.values(this.repository)
      .find(element => element.title === categoryTitle)
    if (!entry){
      return null;
    }
    return {...entry};
  }
}
