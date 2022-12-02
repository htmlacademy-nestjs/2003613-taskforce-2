import { Task, TaskStatus } from '@task-force/shared-types';

export class TaskEntity {
  public id: string;
  public title: string;
  public description: string;
  public clientId: string;
  public categoryId: string;
  public dueDate: Date;
  public status: TaskStatus;
  public cost: number;
  public address: string;
  public tagIds: string[];
  public imagePath: string;
  public executorId: string;
  public responsesCount: number;
  public commentsCount: number;
  public isReviewed: boolean;

  constructor(task:Task) {
    this.fillEntity(task);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(task: Task) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.clientId = task.clientId;
    this.categoryId = task.categoryId;
    this.dueDate = task.dueDate;
    this.status = task.status;
    this.cost = task?.budget;
    this.address = task?.address;
    this.tagIds = task?.tagIds;
    this.imagePath = task?.imagePath;
    this.executorId = task?.executorId;
    this.responsesCount = task?.responsesCount;
    this.commentsCount = task?.commentsCount;
    this.isReviewed = task?.isReviewed;
  }
}
