import { Module } from '@nestjs/common';
import { TaskTagController } from './task-tag.controller';
import { TaskTagService } from './task-tag.service';

@Module({
  controllers: [TaskTagController],
  providers: [TaskTagService],
})
export class TaskTagModule {}
