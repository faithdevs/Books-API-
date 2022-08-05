import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {CommentsModule} from '../comments/comments.module';

@Module({
  controllers: [BooksController],
  providers: [BooksService, ConfigService],
  imports: [HttpModule, CommentsModule],
})
export class BooksModule {}
