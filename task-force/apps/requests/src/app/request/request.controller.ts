import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { fillObject } from '@task-force/core';
import CreateRequestDto from './dto/create-request.dto';
import RequestRdo from './rdo/request.rdo';
import { RequestService } from './request.service';


@Controller('requests')
export class RequestController {
  constructor(
    private requestService: RequestService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const requestId = parseInt(id, 10);
    const Request = await this.requestService.getRequestById(requestId);
    return fillObject(RequestRdo, Request);
  }

  @Get('/')
  async index() {
    const categories = await this.requestService.index();
    return fillObject(RequestRdo, categories);
  }

  @Post('/')
  async create(@Body() dto: CreateRequestDto) {
    const newRequest = await this.requestService.create(dto);
    return fillObject(RequestRdo, newRequest);
  }
}
