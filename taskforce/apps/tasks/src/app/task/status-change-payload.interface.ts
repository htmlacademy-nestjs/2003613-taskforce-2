import { UserRole } from '@taskforce/shared-types';

export interface StatusChangePayload {
  userRole?: UserRole,
  clientId?: string;
  executorId?: string;
}
