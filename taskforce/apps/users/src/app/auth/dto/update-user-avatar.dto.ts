import { ApiProperty } from '@nestjs/swagger';

export default class UpdateUserAvatarDto {
  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  public email: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
  })
  public avatar: string;
}
