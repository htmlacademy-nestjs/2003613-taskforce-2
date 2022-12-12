import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export default class ResponseRdo {
  @ApiProperty({
    description: 'The uniq response id ',
    example: '4353642828136379763',
  })
  @Expose()
  public id: number;

  @ApiProperty({
    description: 'The response text, string length min 50 max 500 characters',
    example: 'Some text…',
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'Task executor id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3'
  })
  @Expose()
  public executorId: string;

  @ApiProperty({
    description: 'Response creator id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Expose()
  public clientId: string;

  @ApiProperty({
    description: 'The uniq task id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Expose()
  public taskId: number;

  @ApiProperty({
    description: 'Evaluation of the task execution, number from 1 to 5',
    example: '4',
  })
  @Expose()
  public evaluation: number;
}
