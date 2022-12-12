import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export default class CommentRdo {
  @ApiProperty({
    description: 'The comment id',
    example: '4353642828136379763',
  })
  @Expose()
  public id: number;

  @ApiProperty({
    description: 'Comment creator id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3'
  })
  @Expose()
  public authorId: string;

  @ApiProperty({
    description: 'Parent task id',
    example: '4353642828136379763'
  })
  @Expose()
  public taskId: number;

  @ApiProperty({
    description: 'Comment creation date (ISO format)',
    example: '2022-11-06'
  })
  @Expose()
  public dateCreated: Date;

  @ApiProperty({
    description: 'Comment text, string length min 10 max 300 characters',
    example: 'Some text…'
  })
  @Expose()
  public text: string;
}
