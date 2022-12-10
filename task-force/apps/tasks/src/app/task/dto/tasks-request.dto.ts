import { ApiProperty } from '@nestjs/swagger';
import { City, TaskStatus } from '@task-force/shared-types';
import { Expose } from 'class-transformer';

export default class TasksRequestDto {
  @ApiProperty({
    description: 'Descending sort task by creation date',
    example: 'true'
  })
  public sortNewestTasks?: boolean;
  @ApiProperty({
    description: 'Descending sort task by count of executor\'s responses',
    example: 'true'
  })
  public sortMostRequestedTasks?: boolean;
  @ApiProperty({
    description: 'Descending sort task by count of comments',
    example: 'true'
  })
  public sortMostCommentedTasks?: boolean;

  @ApiProperty({
    description: 'Task status to filter by',
    example: 'Done'
  })
  public status?: TaskStatus;

  @ApiProperty({
    description: 'Task creator id to filter by',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3'
  })
  public clientId?: string;

  @ApiProperty({
    description: 'Task executor id to filter by',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3'
  })
  public executorId?: string;

  @ApiProperty({
    description: 'Task category id to filter by',
    example: 4353642828136379763
  })
  public taskCategory?: number;

  @ApiProperty({
    description: 'Task city name to filter by',
    example: 'Москва'
  })
  @Expose()
  public city?: City;

  @ApiProperty({
    description: 'Task tag id to filter by',
    example: 4353642828136379763
  })
  taskTag?: number;
}
