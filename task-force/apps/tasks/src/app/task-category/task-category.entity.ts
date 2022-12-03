import { TaskCategory } from '@task-force/shared-types';

export class TaskCategoryEntity implements TaskCategory {
  public id: number;
  public title: string;

  constructor(category: TaskCategory) {
    this.fillEntity(category);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(category: TaskCategory) {
    this.id = category?.id;
    this.title = category?.title;
  }
}
