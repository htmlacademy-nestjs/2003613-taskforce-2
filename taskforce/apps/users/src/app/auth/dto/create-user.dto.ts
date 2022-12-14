import { ApiProperty } from '@nestjs/swagger';
import { City, UserRole } from '@taskforce/shared-types';
import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsISO8601, Length, Validate } from 'class-validator';
import { AgeValidator } from '../../validators/age-validator';
import { AuthUserError, UserApiDescription, UserNameLength, UserPasswordLength } from '../auth.constant';

export default class CreateUserDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'user@user.local'
  })
  @IsEmail(
    {},
    {message: AuthUserError.EmailNotValid},
  )
  public email: string;

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
  public name: string;

  @ApiProperty({
    description: UserApiDescription.City,
    example: City.Moscow
  })
  @IsEnum(
    City,
    {
      message: AuthUserError.CityIsWrong,
      })
  @Transform(({value}) => value as City)
  public city: City;

  @ApiProperty({
    description: UserApiDescription.Password,
    example: '123456'
  })
  @Length(
    UserPasswordLength.Min,
    UserPasswordLength.Max,
    {
      message: AuthUserError.PasswordNotValid
    })
  public password: string;

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
    description: UserApiDescription.Role,
    example: UserRole.Client
  })
  @IsEnum(
    UserRole,
    {
      message: AuthUserError.RoleIsWrong
  })
  @Transform(({value}) => value as UserRole)
  public role: UserRole;
}
