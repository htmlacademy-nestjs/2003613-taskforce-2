import { CRUDRepository } from '@task-force/core';
import { Task } from '@task-force/shared-types';
import TasksRequestDto from './dto/tasks-request.dto';
import { TaskEntity } from './task.entity';

export class TaskMemoryRepository implements CRUDRepository<TaskEntity, number, Task>{
  private repository: {[key: string]: Task} = {};

  public async create(item: TaskEntity): Promise<Task> {
    const idValue = Object.values(this.repository).length;
    const entry = {...item.toObject(), id: idValue};
    this.repository[entry.id] = entry;

    return {...entry}
  }

  public async destroy(id: number): Promise<void> {
    delete this.repository[id];
  }

  public async find(dto: TasksRequestDto): Promise<Task[]> {
    //WIP
    console.log(dto);
    return Object.values(this.repository);
  }

  public async findById(id: number): Promise<Task | null> {
    const entry = this.repository[id];
    if (!entry){
      return null;
    }
    return {...entry};
  }

  public async update(id: number, item: TaskEntity): Promise<Task> {
    this.repository[id] = {...item.toObject(), _id: id} as Task;

    return this.findById(id);
  }
}
