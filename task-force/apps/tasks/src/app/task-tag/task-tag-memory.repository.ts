import { CRUDRepository } from '@task-force/core';
import { TaskCategory } from '@task-force/shared-types';
import { TaskTagEntity } from './task-tag.entity';

export class TaskTagMemoryRepository implements CRUDRepository<TaskTagEntity, number, TaskCategory>{
  private repository: {[key: number]: TaskCategory} = {};

  public async create(item: TaskTagEntity): Promise<TaskCategory> {
    const idValue = Object.values(this.repository).length;
    const entry = {...item.toObject(), id: idValue};
    this.repository[entry.id] = entry;

    return {...entry}
  }

  public async index(): Promise<TaskCategory[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: number): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: number): Promise<TaskCategory | null>{
    const entry = this.repository[id];
    if (!entry){
      return null;
    }
    return {...entry};
  }

  public async update(id: number, item: TaskTagEntity): Promise<TaskCategory>{
    this.repository[id] = {...item.toObject(), id: id} as TaskCategory;

    return this.findById(id);
  }

  public async findByTitle(tagTitle: string): Promise<TaskCategory | null> {
    const entry = Object.values(this.repository)
      .find(element => element.title === tagTitle)
    if (!entry){
      return null;
    }
    return {...entry};
  }
}
