import { TaskStatus } from './task-status.enum';

export interface Task {
  id: string,
  title: string;
  description: string;
  clientId: string;
  categoryId: string;
  status: TaskStatus;
  dueDate?: Date;
  address?: string;
  budget?: number;
  tagIds?: string[];
  imagePath?: string;
  executorId?: string;
  responsesCount?: number;
  commentsCount?: number;
  isReviewed?: boolean;
}
