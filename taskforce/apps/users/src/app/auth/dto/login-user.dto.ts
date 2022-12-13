import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';
import { AuthUserError, UserApiDescription, UserPasswordLength } from '../auth.constant';

export class LoginUserDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'user@user.local'
  })
  @IsEmail(
    {},
    {
      message: AuthUserError.EmailNotValid
    })
  public email: string;

  @ApiProperty({
    description: `User password, min ${UserPasswordLength.Min}, max ${UserPasswordLength.Max} chars length`,
    example: '123456'
  })
  @Length(
    UserPasswordLength.Min,
    UserPasswordLength.Max,
    {
      message: AuthUserError.PasswordIsWrong
    })
  public password: string;
}
