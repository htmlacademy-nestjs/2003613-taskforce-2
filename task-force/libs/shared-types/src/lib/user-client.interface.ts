import { UserMain } from '@task-force/shared-types';

export interface UserClient extends UserMain {
    taskPublishedCount?: number,
    taskNewCount?: number,
}
