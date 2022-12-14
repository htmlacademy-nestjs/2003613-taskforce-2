import { ApiProperty } from '@nestjs/swagger';
import {City} from "@taskforce/shared-types";
import { ArrayMaxSize, IsArray, IsEnum, IsISO8601, Length, MaxLength, Validate } from 'class-validator';
import { Transform } from 'class-transformer';
import { AgeValidator } from '../../validators/age-validator';
import {
  AuthUserError,
  UserApiDescription,
  UserInfoLength,
  UserNameLength,
  UserOccupationCount,
} from '../auth.constant';

export default class UpdateUserDto {
  @ApiProperty({
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
    description: UserApiDescription.DateBirth,
    example: '1981-03-12',
  })
  @IsISO8601({
    message: AuthUserError.DateBirthNotValid,
  })
  @Validate(
    AgeValidator,
    {
      message: AuthUserError.AgeNotValid
    })
  @Transform(({value}) => new Date(value))
  public dateBirth: Date;

  @ApiProperty({
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
