import { UserMain } from '@taskforce/shared-types';

export interface UserExecutor extends UserMain {
  occupations?: string[];
  rating?: number;
  rank?: number;
  taskDoneCount?: number;
  taskFailedCount?: number;
}
