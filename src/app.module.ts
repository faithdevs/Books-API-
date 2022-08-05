import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { CharactersModule } from './characters/characters.module';
import { CommentsModule } from './comments/comments.module';
import {Comment} from './comments/entities/comment.entity';
import {ConfigService} from '@nestjs/config';

@Module({
  imports: [CharactersModule, CommentsModule, BooksModule,ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
    expandVariables: true
  }), TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory:(configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        // ssl:configService.get<string>('NODE_ENV') === 'development' ,
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD') || null,
        database: configService.get('DB_DATABASE'),
        entities: [Comment],
        synchronize: false,
      }),
    inject: [ConfigService]
  })]
})
export class AppModule {}
