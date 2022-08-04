import { Injectable,  HttpException} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {Comment} from './entities/comment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentsService {

  // repository
  constructor(
    @InjectRepository(Comment) private CommentRepository: Repository<Comment>
  ){}

  async create(createCommentDto: CreateCommentDto):Promise<Comment> {
    try {
      const makeComment = new Comment();
      for (const key in CreateCommentDto) {
        makeComment[key] = CreateCommentDto[key];
        
    }
    return this.CommentRepository.save(makeComment);
  } catch (error) {
    const err = {
      message: 'Error creating comments',
      code: error.response.status || 500 }
    throw new HttpException(err.message, err.code);
  }
}

  findAll() {
    return `This action returns all comments`;
  }

  async commentFromBook(book_id: number, frequency?: boolean): Promise<[Comment[], number]> {
    try {
      const comments = await this.CommentRepository.find({
        where: {
          book_id: book_id, // where book_id = book_id
          
        },
        order: {
          id: 'DESC' // order by id DESC
        }

    })

    return [comments, frequency? comments.length: null];
  } catch (error) {
    const err = {
      message: 'Error fetching comments',
      code: error.response.status || 500 }
    throw new HttpException(err.message, err.code);
    }
  }
// count doc funtion 

  async frequency(book_id: number): Promise<number> {
      const [_,frequency] = await this.CommentRepository.findAndCount({
        where: {
          book_id: book_id // where book_id = book_id
        }
      });
        return frequency
    }
  }
