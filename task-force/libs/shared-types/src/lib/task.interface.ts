import { City } from './city.enum';
import { TaskCategory } from './task-category.interface';
import { TaskStatus } from './task-status.enum';
import { TaskTag } from './task-tag.interface';

export interface Task {
  id: number,
  title: string;
  description: string;
  clientId: string;
  taskCategory: TaskCategory;
  publishAt?: Date;
  status: TaskStatus;
  dueDate?: Date;
  city: City;
  address?: string;
  budget?: number;
  taskTags?: TaskTag[];
  imagePath?: string;
  executorId?: string;
  requestIds?: number[];
  commentIds?: number[];
  reviewId?: number;
}
