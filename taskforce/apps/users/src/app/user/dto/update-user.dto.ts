import { ApiProperty } from '@nestjs/swagger';
import { City, FileElement } from '@taskforce/shared-types';
import { Transform } from 'class-transformer';
import { ArrayMaxSize, IsArray, IsDate, IsEnum, Length, MaxLength, Validate } from 'class-validator';
import { AgeValidator } from '../../validators/age.validator';
import {
  UserApiError,
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
      message: UserApiError.NameNotValid
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
      message: UserApiError.CityIsWrong
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
      message: UserApiError.InfoNotValid
    })
  public info?: string;

  @ApiProperty({
    required: false,
    description: UserApiDescription.DateBirth,
    example: '1981-03-12',
  })
  @IsDate({
    message: UserApiError.DateBirthNotValid,
  })
  @Validate(
    AgeValidator,
    {
      message: UserApiError.AgeNotValid
    })
  @Transform(({value}) => new Date(value))
  public dateBirth?: Date;

  @ApiProperty({
    required: false,
    description: UserApiDescription.Image,
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
      message: UserApiError.OccupationNotValid
    })
  public occupations?: string[];
}
