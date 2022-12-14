import { City, TaskStatus, UserRole } from '@taskforce/shared-types';

export const AuthUserError = {
  AgeNotValid: `User should be alder than ${UserAge.Min}`,
  CityIsWrong: `User city name field must contain any of these values: ${Object.values(City).join(', ')}`,
  DateBirthNotValid: 'The user date birth is not valid',
  EmailNotValid: 'The email is not valid',
  Exists: 'User with this email already exists',
  InfoNotValid: `User info should not be more than ${UserInfoLength.Max} chars length`,
  NameNotValid: `User name, min ${UserNameLength.Min}, max ${UserNameLength.Max} chars length`,
  NotFound: 'User not found',
  OccupationNotValid: `Maximum count of executor's occupation is ${UserOccupationCount.Max}`,
  PasswordNotValid: `Password min length is  ${UserPasswordLength.Min}, max is ${UserPasswordLength.Max}`,
  PasswordIsWrong: 'User password is wrong',
  RoleIsWrong: `User role field must contains any of these values: ${Object.values(UserRole).join(', ')}`,
  AvatarFileTypeWrong: 'Avatar image must be jpg or png',
} as const;

export const UserApiDescription = {
  Avatar: 'User avatar path',
  City: `User city name, any of these values: ${Object.values(City).join(', ')}\``,
  CurrentPassword: `User's current password`,
  DateBirth: 'User birth date, ISO8601 string',
  Email: 'User unique email address',
  Id: 'The uniq user id',
  Info: `Optional user info, max ${UserInfoLength.Max} chars length`,
  Name: `User name and surname, min ${UserNameLength.Min}, max ${UserNameLength.Max} chars`,
  NewPassword: `New password, min ${UserPasswordLength.Min}, max ${UserPasswordLength.Max} chars length`,
  Occupation: `List of executor\'s occupations, max count is ${UserOccupationCount.Max}`,
  Password: `User password, min ${UserPasswordLength.Min}, max ${UserPasswordLength.Max} chars length`,
  Rank: 'Executor rank',
  Rating: 'Executor rating',
  Role: `Any of user's role values: ${Object.values(UserRole).join(', ')}`,
  TaskDone: 'Count of tasks that executor has done',
  TaskFailed: 'Count of tasks that executor has failed',
  TasksNew: `Count of client's tasks with status "${TaskStatus.New}"`,
  TasksPublished: 'Count of all tasks that client has created',
  Token: 'Access token',

} as const;

export const enum UserPasswordLength {
  Min = 6,
  Max = 12,
}

export const enum UserNameLength {
  Min = 3,
  Max = 50,
}

export const enum UserInfoLength {
  Max = 300,
}

export const enum UserOccupationCount {
  Max = 5,
}

export const enum UserAge {
  Min = 18,
}
