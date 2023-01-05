import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CommentRepository from './comment/comment.repository';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, CommentModule],
  controllers: [AppController, CommentController],
  providers: [AppService, CommentService, CommentRepository],
})
export class AppModule {}
