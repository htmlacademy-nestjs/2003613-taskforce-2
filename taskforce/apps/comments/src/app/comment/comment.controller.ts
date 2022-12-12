import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { fillObject } from '@taskforce/core';
import { CommentService } from './comment.service';
import CreateCommentDto from './dto/create-comment.dto';
import CommentRdo from './rdo/comment.rdo';

@Controller('comments')
export class CommentController {
  constructor(
    private commentService: CommentService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const commentId = parseInt(id, 10);
    const Comment = await this.commentService.getCommentById(commentId);
    return fillObject(CommentRdo, Comment);
  }

  @Get('/')
  async index() {
    const categories = await this.commentService.index();
    return fillObject(CommentRdo, categories);
  }

  @Post('/')
  async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.create(dto);
    return fillObject(CommentRdo, newComment);
  }
}
