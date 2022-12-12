import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '@taskforce/shared-types';

export default class CreateCommentDto implements Comment {
  @ApiProperty({
    description: 'The comment id',
    example: '4353642828136379763',
  })
  public id: number;

  @ApiProperty({
    description: 'Comment creator id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3'
  })
  public authorId: string;

  @ApiProperty({
    description: 'Parent task id',
    example: '4353642828136379763'
  })
  public taskId: number;

  @ApiProperty({
    description: 'Comment creation date (ISO format)',
    example: '2022-11-06'
  })
  public dateCreated: Date;

  @ApiProperty({
    description: 'Comment text, string length min 10 max 300 characters',
    example: 'Some text…'
  })
  public text: string;
}
