import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { HttpModule } from '@nestjs/axios';
import {CommentsModule} from '../comments/comments.module';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [HttpModule, CommentsModule],
})
export class BooksModule {}
