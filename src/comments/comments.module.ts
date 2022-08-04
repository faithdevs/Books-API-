import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';


@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService, CommentsModule],
  imports: [TypeOrmModule.forFeature([Comment])],
})
export class CommentsModule {}
