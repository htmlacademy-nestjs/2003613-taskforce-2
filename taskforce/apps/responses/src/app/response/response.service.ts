import { Injectable } from '@nestjs/common';
import CreateResponseDto from './dto/create-response.dto';
import ResponseMemoryRepository from './response-memory.repository';
import ResponseEntity from './response.entity';

@Injectable()
export class ResponseService {

  constructor(
    private readonly responseRepository: ResponseMemoryRepository
  ) {}

  async create(dto: CreateResponseDto) {
    const responseEntity = new ResponseEntity(dto);
    return this.responseRepository.create(responseEntity);
  }

  async index() {
    return this.responseRepository.index();
  }

  async getCommentById(responseId: number) {
    return this.responseRepository.findById(responseId);
  }

  async delete(responseId: number) {
    await this.responseRepository.destroy(responseId);
  }
}
