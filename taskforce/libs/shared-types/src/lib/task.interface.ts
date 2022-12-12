import { City } from './city.enum';
import { TaskStatus } from './task-status.enum';
import { TaskTag } from './task-tag.interface';

export interface Task {
  id?: number,
  title: string;
  description: string;
  clientId: string;
  categoryId: number;
  status: TaskStatus;
  city: City;
  address?: string;
  dueDate?: Date;
  publishAt?: Date;
  budget?: number;
  tags?: TaskTag[];
  imagePath?: string;
  executorId?: string;
  requestIds?: number[];
  commentIds?: number[];
  reviewId?: number;
}
