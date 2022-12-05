import { TaskCategory } from '@task-force/shared-types';

export class TaskTagEntity implements TaskCategory {
  public id: number;
  public title: string;

  constructor(tag: TaskCategory) {
    this.fillEntity(tag);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(tag: TaskCategory) {
    this.id = tag?.id;
    this.title = tag?.title;
  }
}
