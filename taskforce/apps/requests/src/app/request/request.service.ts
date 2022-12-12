import { Injectable } from '@nestjs/common';
import CreateRequestDto from './dto/create-request.dto';
import RequestMemoryRepository from './request-memory.repository';
import RequestEntity from './request.enity';


@Injectable()
export class RequestService {

  constructor(
    private readonly requestRepository: RequestMemoryRepository
  ) {}

  async create(dto: CreateRequestDto) {

    const requestEntity = new RequestEntity(dto);

    return this.requestRepository.create(requestEntity);
  }


  async index() {
    return this.requestRepository.index();
  }

  async getRequestById(requestId: number) {
    return this.requestRepository.findById(requestId);
  }

  async delete(requestId: number) {
    await this.requestRepository.destroy(requestId);
  }


}
