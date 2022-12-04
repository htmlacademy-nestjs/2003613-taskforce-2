import { ApiProperty } from '@nestjs/swagger';
import {City} from "@task-force/shared-types";

export default class UpdateUserDto {
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
    description: 'User information',
    example: 'Some text…'
  })
  public info: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1981-03-12',
  })
  public dateBirth: Date;

  @ApiProperty({
    description: 'User role',
    example: ['plumber', 'locksmith',  'mechanic'],
  })
  public occupations: string[];
}
