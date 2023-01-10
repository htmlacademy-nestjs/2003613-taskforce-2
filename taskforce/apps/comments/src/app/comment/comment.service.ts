import { Injectable } from '@nestjs/common';
import CommentEntity from './comment.entity';
import CommentRepository from './comment.repository';
import CreateCommentDto from './dto/create-comment.dto';
import { CommentQuery } from './query/comment.query';

@Injectable()
export class CommentService {

  constructor(
    private readonly commentRepository: CommentRepository
  ) {}

  async create(dto: CreateCommentDto) {
    const commentEntity = new CommentEntity(dto);
    return this.commentRepository.create(commentEntity);
  }

  async getComments(query: CommentQuery) {
    return this.commentRepository.find(query);
  }

  async getCommentById(commentId: number) {
    return this.commentRepository.findById(commentId);
  }

  async deleteComment(commentId: number) {
    await this.commentRepository.destroy(commentId);
  }

  async deleteCommentsByTaskId(taskId: number) {
    await this.commentRepository.destroyByTaskId(taskId);
  }
}
