import { City } from './city.enum';
import { TaskStatus } from './task-status.enum';

export interface Task {
  id: number,
  title: string;
  description: string;
  clientId: string;
  categoryId: string;
  status: TaskStatus;
  dueDate?: Date;
  city: City;
  address?: string;
  budget?: number;
  tagIds?: string[];
  imagePath?: string;
  executorId?: string;
  responsesCount?: number;
  commentsCount?: number;
  isReviewed?: boolean;
}
