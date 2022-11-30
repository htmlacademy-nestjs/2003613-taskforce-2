import { TaskCategory } from './task-category.interface';
import { TaskStatus } from './task-status.enum';
import { TaskTag } from './task-tag.interface';

export interface Task {
  title: string;
  description: string;
  clientId: string;
  category: TaskCategory;
  cost: number;
  dueDate: Date;
  address: string;
  status: TaskStatus;
  tags?: TaskTag[];
  imagePath?: string;
  executorId?: string;
  responsesCount?: number;
  commentsCount?: number;
  isReviewed?: boolean;
}
