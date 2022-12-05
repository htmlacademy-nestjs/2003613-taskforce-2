import { UserMain } from '@task-force/shared-types';

export interface UserExecutor extends UserMain {
  occupations?: string[];
  rating?: number;
  rank?: number;
  taskDoneCount?: number;
  taskFailedCount?: number;
}
