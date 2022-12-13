import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches } from 'class-validator';
import { AuthUserError, UserApiDescription } from '../auth.constant';

export default class UpdateUserAvatarDto {
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
    description: UserApiDescription.Avatar,
    example: '/images/user.png'
  })
  @Matches(
    /[\w/-]+.(jpg|png)/,
    {
      message: AuthUserError.AvatarFileTypeWrong
    })
  public avatar: string;
}
