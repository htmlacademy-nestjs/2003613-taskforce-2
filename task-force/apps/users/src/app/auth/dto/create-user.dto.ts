import { ApiProperty } from '@nestjs/swagger';
import {City, UserRole} from "@task-force/shared-types";

export default class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.local'
  })
  public email: string;

  @ApiProperty({
    description: 'User name and surname',
    example: 'Keks Academiev',
  })
  public name: string;

  @ApiProperty({
    description: 'User city name',
    example: 'Москва'
  })
  public city: City;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public password: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1981-03-12',
  })
  public dateBirth: Date;

  @ApiProperty({
    description: 'User role',
    example: 'client'
  })
  public role: UserRole;
}
