import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { getRabbitMqConfig } from '../../config/rabbitmq.config';
import { TokenSessionModule } from '../tokens/token-session.module';
import { UserModule } from '../user/user.module';
import { RABBITMQ_SERVICE } from './auth.constant';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAccessModule } from './jwt-access.module';
import { JwtRefreshModule } from './jwt-refresh.module';

@Module({
    imports: [
      UserModule,
      PassportModule,
      TokenSessionModule,
      JwtAccessModule,
      JwtRefreshModule,
      ClientsModule.registerAsync([
        {
          name: RABBITMQ_SERVICE,
          useFactory: getRabbitMqConfig,
          inject: [ConfigService]
        }
      ]),
    ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
