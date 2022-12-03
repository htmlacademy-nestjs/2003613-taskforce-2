import { Injectable } from '@nestjs/common';
import CommentMemoryRepository from './comment-memory.repository';
import CommentEntity from './comment.entity';
import CreateCommentDto from './dto/create-comment.dto';


@Injectable()
export class CommentService {

  constructor(
    private readonly commentRepository: CommentMemoryRepository
  ) {}

  async create(dto: CreateCommentDto) {

    const commentEntity = new CommentEntity(dto);

    return this.commentRepository.create(commentEntity);
  }


  async index() {
    return this.commentRepository.index();
  }

  async getCommentById(commentId: number) {
    return this.commentRepository.findById(commentId);
  }

  async delete(commentId: number) {
    await this.commentRepository.destroy(commentId);
  }

}
