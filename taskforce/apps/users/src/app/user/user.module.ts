import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from '../auth/auth.service';
import { UserController } from './user.controller';
import { UserModel, UserSchema } from './user.model';
import UserRepository from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    // AuthModule,
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UserRepository, UserService, AuthService, JwtService], //
  exports: [UserRepository],
  controllers: [UserController],
})
export class UserModule {}
