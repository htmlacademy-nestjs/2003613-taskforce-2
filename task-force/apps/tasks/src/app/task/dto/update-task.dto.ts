import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '@task-force/shared-types';

export default class UpdateTaskDto {
  @ApiProperty({
    description: 'Any of possible task status',
    example: 'Done'
  })
  public status: TaskStatus;
}
