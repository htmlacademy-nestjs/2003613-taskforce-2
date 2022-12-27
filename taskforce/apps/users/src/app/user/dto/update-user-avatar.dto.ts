import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { AuthUserError, UserApiDescription } from '../user.constant';

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
  public avatar: string;
}
