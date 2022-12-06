import { ApiProperty } from '@nestjs/swagger';
import { City, UserRole } from '@task-force/shared-types';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name and surname',
    example: 'Keks Academiev',
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'User city name',
    example: 'Москва',
  })
  @Expose()
  public city: City;

  @ApiProperty({
    description: 'User date birth (ISO format)',
    example: '1981-03-12',
  })
  @Expose()
  public dateBirth: string;

  @ApiProperty({
    description: 'User role',
    example: 'Client',
  })
  @Expose()
  public role: UserRole;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png',

  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User info',
    example: 'Some text…',
  })
  @Expose()
  public info: string;

  @ApiProperty({
    description: 'Count of all tasks that client has created',
    example: '10',
  })
  @Expose({groups: [UserRole.Client]})
  public taskPublishedCount?: number;

  @ApiProperty({
    description: 'Count of client\s tasks with status \"New\"',
    example: '10',
  })
  @Expose({groups: [UserRole.Client]})
  taskNewCount?: number;

  @ApiProperty({
    description: 'List of executor\s occupations',
    example: ['plumber', 'locksmith',  'mechanic'],
  })
  @Expose( {groups: [UserRole.Executor]})
  public occupations?: string[];

  @ApiProperty({
    description: 'Executor rating',
    example: '10',
  })
  @Expose({groups: [UserRole.Executor]})
  public rating?: number;

  @ApiProperty({
    description: 'Executor rank',
    example: '10',
  })
  @Expose({groups: [UserRole.Executor]})
  public rank?: number;

  @ApiProperty({
    description: 'Count of tasks that executor has done',
    example: '10',
  })
  @Expose({groups: [UserRole.Executor]})
  public taskDoneCount?: number;

  @ApiProperty({
    description: 'Count of tasks that executor has failed',
    example: '10',
  })
  @Expose({groups: [UserRole.Executor]})
  public taskFailedCount?: number;
}
