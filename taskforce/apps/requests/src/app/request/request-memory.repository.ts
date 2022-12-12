import { CRUDRepository } from '@taskforce/core';
import { Request } from '@taskforce/shared-types';
import RequestEntity from './request.enity';

export default class RequestMemoryRepository implements CRUDRepository<RequestEntity, number, Request> {
  private repository: {[key: number]: Request} = {};

  public async create(item: RequestEntity): Promise<Request> {
    const idValue = Object.values(this.repository).length;
    const entry = {...item.toObject(), id: idValue};
    this.repository[entry.id] = entry;

    return {...entry}
  }

  public async index(): Promise<Request[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: number): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: number): Promise<Request | null>{
    const entry = this.repository[id];
    if (!entry){
      return null;
    }
    return {...entry};
  }

  public async update(id: number, item: RequestEntity): Promise<Request>{
    this.repository[id] = {...item.toObject(), id: id} as Request;

    return this.findById(id);
  }
}
