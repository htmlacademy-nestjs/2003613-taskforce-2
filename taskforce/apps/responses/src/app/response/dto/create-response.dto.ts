import { ApiProperty } from '@nestjs/swagger';

export default class CreateResponseDto {
  @ApiProperty({
    description: 'The response text, string length min 50 max 500 characters',
    example: 'Some text…',
  })
  public text: string;

  @ApiProperty({
    description: 'Task executor id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3'
  })
  public executorId: string;

  @ApiProperty({
    description: 'Response creator id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  public clientId: string;

  @ApiProperty({
    description: 'The uniq task id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  public taskId: number;

  @ApiProperty({
    description: 'Evaluation of the task execution, number from 1 to 5',
    example: '4',
  })
  public evaluation: number;
}
