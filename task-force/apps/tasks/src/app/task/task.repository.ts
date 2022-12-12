import { Injectable } from '@nestjs/common';
import { Task as Entry } from '@prisma/client';
import { CRUDRepository } from '@task-force/core';
import { City, Task, TaskStatus } from '@task-force/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskRepository implements CRUDRepository<TaskEntity, number, Task>{
  constructor(
    private readonly prisma: PrismaService
  ) {}

  private adaptEntryToTask(entry: Entry): Task {
    return {
      ...entry,
      city: entry.city as City,
      status: entry.status as TaskStatus,
    };
  }

  public async create(item: TaskEntity): Promise<Task> {
    const entityData = item.toObject();
    const task = await this.prisma.task.create({
      data: {
        ...entityData,
        tags: {
          connect: [...entityData.tags]
        },
      },
      include: {
        category: true,
        tags: true,
      }
    });
    return this.adaptEntryToTask(task);
  }

  public async find(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      include: {
        tags: true,
      }
    });
    return tasks.map((task) => this.adaptEntryToTask(task));
  }

  public async findById(id: number): Promise<Task | null> {
    const task = await this.prisma.task.findFirst({
      where: {
        id,
      },
      include: {
        tags: true,
        category: true,
      }
    });

    return this.adaptEntryToTask(task);
  }

  public async update(id: number, item: TaskEntity): Promise<Task> {
    const entityData = item.toObject();
    await this.prisma.task.update({
      where: { id },
      data: {
        ...entityData,
        tags: {
          connect: [...entityData.tags]
        },
      },
      include: {
        tags: true,
      }
    });
    return  this.findById(id);
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.task.delete({
      where: {
        id,
      }
    });
  }
}
