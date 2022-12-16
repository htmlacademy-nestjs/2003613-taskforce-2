import { ApiProperty } from '@nestjs/swagger';
import { City, UserRole } from '@taskforce/shared-types';
import { Expose, Transform } from 'class-transformer';
import { UserApiDescription } from '../user.constant';

export class UserRdo {
  @ApiProperty({
    description: UserApiDescription.Id,
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'user@user.local',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Name,
    example: 'Keks Academiev',
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: UserApiDescription.City,
    example: 'Москва',
  })
  @Expose()
  public city: City;

  @ApiProperty({
    description: UserApiDescription.DateBirth,
    example: '1981-03-12',
  })
  @Expose()
  public dateBirth: string;

  @ApiProperty({
    description: UserApiDescription.Role,
    example: 'Client',
  })
  @Expose()
  public role: UserRole;

  @ApiProperty({
    description: UserApiDescription.Avatar,
    example: '/images/user.png',

  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: UserApiDescription.Info,
    example: 'Some text…',
  })
  @Expose()
  public info: string;

  @ApiProperty({
    description: UserApiDescription.TasksPublished,
    example: '10',
  })
  @Expose({groups: [UserRole.Client]})
  public taskPublishedCount?: number;

  @ApiProperty({
    description: UserApiDescription.TasksNew,
    example: '10',
  })
  @Expose({groups: [UserRole.Client]})
  taskNewCount?: number;

  @ApiProperty({
    description: UserApiDescription.Occupation,
    example: ['plumber', 'locksmith',  'mechanic'],
  })
  @Expose( {groups: [UserRole.Executor]})
  public occupations?: string[];

  @ApiProperty({
    description: UserApiDescription.Rating,
    example: '5',
  })
  @Expose({groups: [UserRole.Executor]})
  public rating?: number;

  @ApiProperty({
    description: UserApiDescription.Rank,
    example: '10',
  })
  @Expose({groups: [UserRole.Executor]})
  public rank?: number;

  @ApiProperty({
    description: UserApiDescription.TaskDone,
    example: '10',
  })
  @Expose({groups: [UserRole.Executor]})
  public taskDoneCount?: number;

  @ApiProperty({
    description: UserApiDescription.TaskFailed,
    example: '10',
  })
  @Expose({groups: [UserRole.Executor]})
  public taskFailedCount?: number;
}
