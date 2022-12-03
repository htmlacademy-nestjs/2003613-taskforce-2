import { TaskTag } from '@task-force/shared-types';

export class TaskCategoryEntity implements TaskTag {
  public id: number;
  public title: string;

  constructor(category: TaskTag) {
    this.fillEntity(category);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(category: TaskTag) {
    this.id = category?.id;
    this.title = category?.title;
  }
}
