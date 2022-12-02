import { CRUDRepository } from '@task-force/core';
import { Task } from '@task-force/shared-types';
import * as crypto from 'crypto';
import TasksRequestDto from './dto/tasks-request.dto';
import { TaskEntity } from './task.entity';

export class TaskMemoryRepository implements CRUDRepository<TaskEntity, string, Task>{
  private repository: {[key: string]: Task} = {};

  public async create(item: TaskEntity): Promise<Task> {
    const entry = {...item.toObject(), id: crypto.randomUUID()} as Task;
    this.repository[entry.id] = entry;

    return {...entry};
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async find(dto: TasksRequestDto): Promise<Task[]> {
    //WIP
    console.log(dto);
    return Object.values(this.repository);
  }

  public async findById(id: string): Promise<Task | null> {
    const entry = this.repository[id];
    if (!entry){
      return null;
    }
    return {...entry};
  }

  public async update(id: string, item: TaskEntity): Promise<Task> {
    this.repository[id] = {...item.toObject(), _id: id} as Task;

    return this.findById(id);
  }
}
