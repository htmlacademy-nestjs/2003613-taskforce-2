import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { fillObject } from '@taskforce/core';
import CommentRdo from '../../../../comments/src/app/comment/rdo/comment.rdo';
import CreateResponseDto from './dto/create-response.dto';
import ResponseRdo from './rdo/response.rdo';
import { ResponseService } from './response.service';

@Controller('responses')
export class ResponseController {
  constructor(
    private responseService: ResponseService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const responseId = parseInt(id, 10);
    const response = await this.responseService.getCommentById(responseId);
    return fillObject(ResponseRdo, response);
  }

  @Get('/')
  async index() {
    const response = await this.responseService.index();
    return fillObject(Response, response);
  }

  @Post('/')
  async create(@Body() dto: CreateResponseDto) {
    const newResponse = await this.responseService.create(dto);
    return fillObject(CommentRdo, newResponse);
  }
}
