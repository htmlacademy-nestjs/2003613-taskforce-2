import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { City, Routes, TaskStatus, UserRole } from '@taskforce/shared-types';
import * as dayjs from 'dayjs';
import { Express } from 'express';
import { ensureDir } from 'fs-extra';
import { diskStorage } from 'multer';
import { extname } from 'path';

const MAX_FILE_SIZE = 512000;
export const SALT_ROUNDS = 10;

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

export const UserApiError = {
  AgeNotValid: `User should be older than ${UserAge.Min}`,
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

export const multerOptions = {
  limits: {
    fileSize: MAX_FILE_SIZE,
  },
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      cb(null, true);
    } else {
      cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
    }
  },
  storage: diskStorage({
    destination: async (req: any, file: Express.Multer.File, cb: any) => {
      const rootDir = process.env.MULTER_DEST;

      const { user, url, id } = req;

      const categoryDir = Object.values(Routes).filter((route) => url.includes(route));
      if (!categoryDir) {
        throw new NotFoundException();
      }

      const userId = user._id;
      const routeId = (id) ? `-${id}` : '';

      const timestamp = `-${dayjs().unix()}`
      const uploadDir = `${rootDir}/${categoryDir}/${userId}${routeId}${timestamp}`
      await ensureDir(uploadDir);
      cb(null, uploadDir);
    },
    filename: (req: any, file: any, cb: any) => {
      cb(null, `${file.originalname}`);
    },
  }),
};

export enum ResponseGroup {
  Avatar = 'avatar',
  Logged = 'logged',
}
