import { City, Entity, Task, TaskCategory, TaskStatus, TaskTag } from '@task-force/shared-types';

export class TaskEntity implements Entity<TaskEntity>, Task {
  public id: number;
  public title: string;
  public description: string;
  public clientId: string;
  public taskCategory: TaskCategory
  public publishAt: Date;
  public dueDate: Date;
  public city: City;
  public status: TaskStatus;
  public cost: number;
  public address: string;
  public taskTags: TaskTag[];
  public imagePath: string;
  public executorId: string;
  public requestIds: number[];
  public commentIds: number[];
  public reviewId: number;

  constructor(task:Task) {
    this.fillEntity(task);
  }

  public toObject(): TaskEntity {
    return {...this};
  }

  public fillEntity(task: Task): void {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.clientId = task.clientId;
    this.taskCategory = task.taskCategory;
    this.publishAt = task?.publishAt;
    this.dueDate = task.dueDate;
    this.city = task.city;
    this.status = task.status;
    this.cost = task?.budget;
    this.address = task?.address;
    this.taskTags = task?.taskTags;
    this.imagePath = task?.imagePath;
    this.executorId = task?.executorId;
    this.requestIds = task?.requestIds;
    this.commentIds = task?.commentIds;
    this.reviewId = task?.reviewId;
  }
}
