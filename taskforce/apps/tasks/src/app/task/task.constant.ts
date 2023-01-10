import { City, SortOrder, SortType, TaskStatus, UserRole } from '@taskforce/shared-types';
import { StatusChangeConditions } from './status-change-conditions.interface';

export const DEFAULT_SORT_ORDER = SortOrder.Descended;
export const DEFAULT_SORT_TYPE = SortType.CreatedAt;
export const DEFAULT_TASK_COUNT_LIMIT = 25;
export const DEFAULT_PAGINATION_COUNT = 1;

export const MAX_FILE_SIZE = 1024000;

export const enum AddressTextLength {
  Min = 10,
  Max = 255,
}

export const enum TitleLength {
  Min = 20,
  Max = 50,
}

export const enum DescriptionLength {
  Min = 100,
  Max = 1024,
}

export const TaskApiError = {
  Id: '',
  Title: '',
  Description: '',
  ClientId: '',
  ExecutorId: '',
  CategoryId: '',
  StatusIsInvalid: `A tasks status isn\'t match any of this values: ${Object.values(TaskStatus).join(', ')}\``,
  StatusIsWrong: 'A new task status isn\'t match statuses flow',
  StatusChangeConditionsIsWrong: 'A new task status isn\'t match statuses flow',
  City: '',
  DueDate: '',
  Address: '',
  PublishAt: '',
  Budget: '',
  Role: '',
  Tags: '',
  RequestIds: '',
  CommentIds: '',
} as const;

export const TaskApiDescription = {
  Id: 'The task Id',
  Title: `Task title, min ${TitleLength.Min}, max ${TitleLength.Max} chars length`,
  Description: `Task description, min ${DescriptionLength.Min}, max ${DescriptionLength.Max} chars length`,
  ClientId: `The uniq id of user with role ${UserRole.Client}`,
  ExecutorId: `The uniq id of user with role ${UserRole.Executor}`,
  CategoryId: 'The task category Id',
  Status: `A one of following tasks status according to status flow rules: ${Object.values(TaskStatus).join(', ')}\``,
  City: `User city name, any of these values: ${Object.values(City).join(', ')}\``,
  DueDate: 'Task due date (ISO format)',
  Address: `Task execution address, string length min 10 max 255 characters`,
  PublishAt: `Task publication date (ISO format)`,
  Budget: `Task estimation client's proposal, zero or positive number`,
  Role: `Any of user's role values: ${Object.values(UserRole).join(', ')}`,
  Tags: 'Array of task\'s tag entities',
  RequestIds: 'Executors requests ids',
  CommentIds: `Task comments ids`,
} as const;

export enum ResponseGroup {
  Picture = 'picture',
}

export const StatusConditions: Record <TaskStatus, StatusChangeConditions> = {
  [TaskStatus.New]: {
    tasksStatus: true,
    clientIsOwner: false,
    taskHasRequest: false,
    taskHasExecutor: false,
  },
  [TaskStatus.Rejected]: {
    taskId: true,
    clientIsOwner: true,
    taskHasExecutor: false,
  },
  [TaskStatus.InProgress]: {
    taskId: true,
    clientIsOwner: true,
    taskHasExecutor: true,
  },
  [TaskStatus.Failed]: {
    taskId: true,
    clientIsOwner: false,
    taskHasExecutor: true,
  },
  [TaskStatus.Done]: {
    taskId: true,
    clientIsOwner: true,
    taskHasExecutor: false,
  },
}

export enum TaskAction {
  SetInProgress,
  SetRejected,
  SetDone,
  SetFailed,
  SetExecutor,
  AddApplication,
  AddReview,
  UploadPicture,
}

export const StatusFlow: Record<TaskStatus, Record <UserRole, TaskAction[]>> = {
  [TaskStatus.New]: {
    [UserRole.Client]: [TaskAction.SetRejected, TaskAction.SetExecutor, TaskAction.UploadPicture],
    [UserRole.Executor]: [TaskAction.AddApplication, TaskAction.SetInProgress],
  },
  [TaskStatus.Rejected]: {
    [UserRole.Client]: [],
    [UserRole.Executor]: [],
  },
  [TaskStatus.InProgress]: {
    [UserRole.Client]: [TaskAction.SetDone],
    [UserRole.Executor]: [TaskAction.SetFailed],
  },
  [TaskStatus.Failed]: {
    [UserRole.Client]: [TaskAction.AddReview],
    [UserRole.Executor]: [undefined],
  },
  [TaskStatus.Done]: {
    [UserRole.Client]: [TaskAction.AddReview],
    [UserRole.Executor]: [undefined],
  },
}
export const ActionConditions: Record <TaskAction, StatusChangeConditions> = {
  [TaskAction.SetRejected]: {
    validNextAction: true,
    validTaskClient: true,
    validTaskExecutor: undefined,
    isApplicant: undefined,
    executorIsFree: undefined,
    hasExecutor: undefined,
    hasPicture: undefined,
  },
  [TaskAction.SetInProgress]: {
    validNextAction: true,
    validTaskClient: undefined,
    validTaskExecutor: true,
    isApplicant: undefined,
    executorIsFree: true,
    hasExecutor: undefined,
    hasPicture: undefined,
  },
  [TaskAction.SetFailed]: {
    validNextAction: true,
    validTaskClient: undefined,
    validTaskExecutor: true,
    isApplicant: undefined,
    executorIsFree: undefined,
    hasExecutor: undefined,
    hasPicture: undefined,
  },
  [TaskAction.SetDone]: {
    validNextAction: true,
    validTaskClient: true,
    validTaskExecutor: undefined,
    isApplicant: undefined,
    executorIsFree: undefined,
    hasExecutor: true,
    hasPicture: undefined,
  },
  [TaskAction.SetExecutor]: {
    validNextAction: true,
    validTaskClient: true,
    validTaskExecutor: undefined,
    isApplicant: true,
    executorIsFree: true,
    hasExecutor: undefined,
    hasPicture: undefined,
  },
  [TaskAction.AddApplication]: {
    validNextAction: true,
    validTaskClient: undefined,
    validTaskExecutor: undefined,
    isApplicant: undefined,
    executorIsFree: undefined,
    hasExecutor: undefined,
    hasPicture: undefined,
  },
  [TaskAction.AddReview]: {
    validNextAction: true,
    validTaskClient: true,
    validTaskExecutor: undefined,
    isApplicant: undefined,
    executorIsFree: undefined,
    hasExecutor: undefined,
    hasPicture: undefined,
  },
  [TaskAction.UploadPicture]: {
    validNextAction: undefined,
    validTaskClient: true,
    validTaskExecutor: undefined,
    isApplicant: undefined,
    executorIsFree: undefined,
    hasExecutor: undefined,
    hasPicture: false,
  },
}
