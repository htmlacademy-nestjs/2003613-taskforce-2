import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@task-force/core';
import { User } from '@task-force/shared-types';
import * as crypto from 'crypto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserMemoryRepository implements CRUDRepository<UserEntity, string, User> {
  private repository: {[key: string]: User} = {};

  public async create(item: UserEntity): Promise<User> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()} as User;
    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: string): Promise<User | null> {
    const entry = this.repository[id];
    if (!entry){
      return null;
    }
    return {...entry};
  }

  public async findByEmail(email: string): Promise<User | null> {
    const existEntry = Object.values(this.repository)
      .find((userItem) => userItem.email === email)
    if (!existEntry){
      return null;
    }
    return {...existEntry};
  }

  public async update(id: string, item: UserEntity): Promise<User> {
    this.repository[id] = {...item.toObject(), _id: id} as User;

    return this.findById(id);
  }
}
