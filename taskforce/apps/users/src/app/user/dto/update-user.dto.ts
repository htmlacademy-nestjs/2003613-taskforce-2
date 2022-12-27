import { ApiProperty } from '@nestjs/swagger';
import { City, FileElement } from '@taskforce/shared-types';
import { Transform } from 'class-transformer';
import { ArrayMaxSize, IsArray, IsDate, IsEnum, Length, MaxLength, Validate } from 'class-validator';
import { AgeValidator } from '../../validators/age.validator';
import {
  AuthUserError,
  UserApiDescription,
  UserInfoLength,
  UserNameLength,
  UserOccupationCount,
} from '../user.constant';

export default class UpdateUserDto {
  @ApiProperty({
    required: false,
    description: UserApiDescription.Name,
    example: 'Keks Academiev',
  })
  @Length(
    UserNameLength.Min,
    UserNameLength.Max,
    {
      message: AuthUserError.NameNotValid
    })
  public name?: string;

  @ApiProperty({
    required: false,
    description: UserApiDescription.City,
    example: City.Moscow
  })
  @IsEnum(
    City,
    {
      message: AuthUserError.CityIsWrong
    })
  public city?: City;

  @ApiProperty({
    required: false,
    description: UserApiDescription.Info,
    example: 'Some text…',
  })
  @MaxLength(
    UserInfoLength.Max,
    {
      message: AuthUserError.InfoNotValid
    })
  public info?: string;

  @ApiProperty({
    required: false,
    description: UserApiDescription.DateBirth,
    example: '1981-03-12',
  })
  @IsDate({
    message: AuthUserError.DateBirthNotValid,
  })
  @Validate(
    AgeValidator,
    {
      message: AuthUserError.AgeNotValid
    })
  @Transform(({value}) => new Date(value))
  public dateBirth?: Date;

  @ApiProperty({
    required: false,
    description: UserApiDescription.Avatar,
    example: '{ url: images/user.png, name: user.png }',
  })
  public avatar?: FileElement;

  @ApiProperty({
    required: false,
    description: UserApiDescription.Occupation,
    example: ['plumber', 'locksmith',  'mechanic'],
  })
  @IsArray()
  @Transform(({value}) => new Set(value.map(item => item.toLowerCase())))
  @ArrayMaxSize(
    UserOccupationCount.Max,
    {
      message: AuthUserError.OccupationNotValid
    })
  public occupations?: string[];
}
