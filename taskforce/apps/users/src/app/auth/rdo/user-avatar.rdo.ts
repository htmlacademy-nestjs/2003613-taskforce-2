import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserAvatarRdo {
  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
  })
  @Expose()
  public avatar: string;
}
