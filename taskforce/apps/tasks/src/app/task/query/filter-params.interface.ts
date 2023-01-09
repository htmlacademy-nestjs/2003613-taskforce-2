import { TaskQuery } from './task.query';

export interface FilterParams extends TaskQuery {
  isMy?: boolean,
  clientId?: string,
  executorId?: string,
}
