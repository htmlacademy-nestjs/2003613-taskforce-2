import {City, UserRole} from "@taskforce/shared-types";

export interface UserMain {
  _id?: string,
  email: string,
  name: string,
  city: City,
  passwordHash: string,
  dateBirth: Date,
  role: UserRole,
  avatar?: string,
  info?: string,
}
