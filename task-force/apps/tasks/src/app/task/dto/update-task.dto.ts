import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '@task-force/shared-types';

export default class UpdateTaskDto {
  @ApiProperty({
    description: 'Valid task id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3'
  })
  public id: string;

  @ApiProperty({
    description: 'Any of possible task status',
    example: 'Done'
  })
  public status: TaskStatus;
}
