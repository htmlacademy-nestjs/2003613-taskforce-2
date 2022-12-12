import { UserMain } from '@taskforce/shared-types';

export interface UserClient extends UserMain {
    taskPublishedCount?: number,
    taskNewCount?: number,
}
