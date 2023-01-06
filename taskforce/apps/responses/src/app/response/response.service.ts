import { HttpStatus, Injectable } from '@nestjs/common';
import CreateResponseDto from './dto/create-response.dto';
import ResponseRepository from './response.repository';
import ResponseEntity from './response.entity';

@Injectable()
export class ResponseService {

  constructor(
    private readonly responseRepository: ResponseRepository
  ) {}

  async create(dto: CreateResponseDto) {
    const { taskId, executorId } = dto;
    const existResponse = await this.responseRepository.findByTaskId(taskId);
    if (existResponse) {
      return HttpStatus.CONFLICT;
    }

    const responseEntity = new ResponseEntity(dto);
    const newResponse = await this.responseRepository.create(responseEntity);
    const evaluationsSum = await this.responseRepository.getExecutorsEvaluationsSum(executorId);

    return {...newResponse, evaluationsSum: evaluationsSum}
  }

  async index() {
    return this.responseRepository.find();
  }

  async getByExecutorId(executorId: string) {
    return this.responseRepository.findByExecutorsId(executorId);
  }

  async delete(responseId: number) {
    await this.responseRepository.destroy(responseId);
  }
}
