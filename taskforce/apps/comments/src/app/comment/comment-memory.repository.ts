import { CRUDRepository } from '@taskforce/core';
import { Comment } from '@taskforce/shared-types';
import CommentEntity from './comment.entity';

export default class CommentMemoryRepository implements CRUDRepository<CommentEntity, number, Comment> {
  private repository: {[key: string]: Comment} = {};

  public async create(item: CommentEntity): Promise<Comment> {
    const idValue = Object.values(this.repository).length;
    const entry = {...item.toObject(), id: idValue};
    this.repository[entry.id] = entry;

    return {...entry}
  }

  public async index(): Promise<Comment[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: number): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: number): Promise<Comment | null>{
    const entry = this.repository[id];
    if (!entry){
      return null;
    }
    return {...entry};
  }

  public async update(id: number, item: CommentEntity): Promise<Comment>{
    this.repository[id] = {...item.toObject(), id: id} as Comment;

    return this.findById(id);
  }
}
