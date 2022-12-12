import { City, Entity, Task, TaskStatus, TaskTag } from '@taskforce/shared-types';

export class TaskEntity implements Entity<TaskEntity>, Task {
  public id: number;
  public title: string;
  public description: string;
  public clientId: string;
  public categoryId: number;
  public status: TaskStatus;
  public city: City;
  public address: string;
  public dueDate: Date;
  public publishAt: Date;
  public budget: number;
  public tags: TaskTag[];
  public imagePath: string;
  public executorId: string;
  public requestIds: number[];
  public commentIds: number[];
  public reviewId: number;

  constructor(task:Task) {
    this.fillEntity(task);
  }

  public toObject(): TaskEntity {
    return {
      ...this,
      tags: this.tags.map(({id}) => ({ id })),
    };
  }

  public fillEntity(entity: Task): void {
    this.title = entity.title;
    this.description = entity.description;
    this.clientId = entity.clientId;
    this.categoryId = entity.categoryId;
    this.status = entity.status;
    this.city = entity.city;
    this.address = entity?.address;
    this.dueDate = entity.dueDate;
    this.publishAt = entity?.publishAt;
    this.budget = entity?.budget;
    this.tags = [...entity.tags];
    this.imagePath = entity?.imagePath;
    this.executorId = entity?.executorId;
    this.requestIds = entity?.requestIds?? [];
    this.commentIds = entity?.commentIds?? [];
    this.reviewId = entity?.reviewId;
  }
}
