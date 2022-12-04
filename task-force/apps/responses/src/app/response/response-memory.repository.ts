import { CRUDRepository } from '@task-force/core';
import { Response } from '@task-force/shared-types';
import ResponseEntity from './response.entity';

export default class ResponseMemoryRepository implements CRUDRepository<ResponseEntity, number, Response> {
  private repository: {[key: number]: Response} = {};

  public async create(item: ResponseEntity): Promise<Response> {
    const idValue = Object.values(this.repository).length;
    const entry = {...item.toObject(), id: idValue};
    this.repository[entry.id] = entry;

    return {...entry}
  }

  public async index(): Promise<Response[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: number): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: number): Promise<Response | null>{
    const entry = this.repository[id];
    if (!entry){
      return null;
    }
    return {...entry};
  }

  public async update(id: number, item: ResponseEntity): Promise<Response>{
    this.repository[id] = {...item.toObject(), id: id} as Response;

    return this.findById(id);
  }
}
