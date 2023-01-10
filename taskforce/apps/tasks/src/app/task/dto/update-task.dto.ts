import { ApiProperty } from '@nestjs/swagger';
import { FileElement, TaskStatus } from '@taskforce/shared-types';
import { IsEnum } from 'class-validator';
import { TaskApiError } from '../task.constant';

export default class UpdateTaskDto {
  @ApiProperty({
    description: 'Any of possible task status',
    example: 'Done'
  })
  @IsEnum(TaskStatus,
    {message: TaskApiError.StatusIsInvalid})
  public status?: TaskStatus;

  @ApiProperty({
    description: 'Any of possible task status',
    example: 'Done'
  })
  public taskPicture?: FileElement;
}
