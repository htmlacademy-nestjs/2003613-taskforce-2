import { Injectable } from '@nestjs/common';
import { User } from '@taskforce/shared-types';
import * as dayjs from 'dayjs';
import { UserEntity } from '../user/user.entity';
import UserRepository from '../user/user.repository';
import { AuthUser } from './auth.constant';
import CreateUserDto from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import UpdateUserAvatarDto from './dto/update-user-avatar.dto';
import UpdateUserPasswordDto from './dto/update-user-password.dto';
import UpdateUserDto from './dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async register(dto: CreateUserDto) {
    const {
      name, email, role, dateBirth,
      city, password
    } = dto;

    const user = {
      name, email, role, avatar: '',
      dateBirth: dayjs(dateBirth).toDate(),
      city, passwordHash: '',
    } as User;

  const existUser =
    await this.userRepository.findByEmail(email);

  if (existUser) {
    throw new Error(AuthUser.Exists);
}

  const userEntity =
    await new UserEntity(user).setPassword(password);

  return this.userRepository.create(userEntity);
  }

  async verifyUser (dto: LoginUserDto) {
    const {
      email, password
    } = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new Error(AuthUser.NotFound);
    }

    const userEntity = new UserEntity(existUser);
    if (! await userEntity.comparePassword(password)) {
      throw new Error(AuthUser.WrongPassword);
    }

    return userEntity.toObject();
  }

  async getUser (id: string) {
    return this.userRepository.findById(id);
  }

  async updateUserAvatar (dto: UpdateUserAvatarDto) {
    const {
      email, avatar
    } = dto;

    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new Error(AuthUser.NotFound);
    }
    const userEntity = new UserEntity({...existUser, avatar});
    return this.userRepository.update(userEntity._id, userEntity);
  }

  async updateUserPassword (dto: UpdateUserPasswordDto) {
    const {
      email, currentPassword, newPassword,
    } = dto;

    const verifiedUser = await this.verifyUser({
      email: email,
      password: currentPassword
    });

    const userEntity =
      await new UserEntity(verifiedUser).setPassword(newPassword);

    return this.userRepository.update(verifiedUser._id, userEntity);
  }

  async updateUserById (id: string, dto: UpdateUserDto) {

    const existUser = await this.userRepository.findById(id);

    if (!existUser) {
      throw new Error(AuthUser.NotFound);
    }
    const newUserEntity = new UserEntity({...existUser, ...dto});
    return this.userRepository.update(newUserEntity._id, newUserEntity);
  }
}
