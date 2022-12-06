import {City, UserRole} from "@task-force/shared-types";

export interface UserMain {
  _id?: string,
  name: string,
  email: string,
  city: City,
  passwordHash: string,
  dateBirth: Date,
  role: UserRole,
  avatar?: string,
  info?: string,
}
