import { HttpException, Injectable, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { HttpService } from '@nestjs/axios';
import {ConfigService} from '@nestjs/config';
import {CommentsService} from '../comments/comments.service';
@Injectable()
export class BooksService {
  constructor(
      private commentsService: CommentsService,
      private readonly httpService:HttpService,
      private readonly configService: ConfigService
  ){}

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  async findAll(): Promise<{}[]> {
  try {
    const {list, num}: {list:[], num:number} = await this.httpService.axiosRef.get(this.configService.get('BOOKS_API_URL')+'/books');

    const getbooks: {}[] = [];

    for await (const [id, {name, authors}] of list.entries()) {
  
      getbooks.push({
        id,
        name,
        authors,
        comments: await this.commentsService.frequency(id),
      });
    }

    return getbooks;

  } catch (error) {
    const err = {
      message: 'Error fetching books',
      code: error.response.status || 500 }
    throw new HttpException(err.message, err.code);
  
  } 
}


  async findOne(id: number) {
    try {
      const {list, num}: {list:[], num:number} = await this.httpService.axiosRef.get(this.configService.get('BOOKS_API_URL')+'/books/'+id);
      const [message, frequency] = await this.commentsService.commentFromBook(id, true);
      return {
        oneBook: list,
        oneComment: {
          message: message,
          frequency: frequency
        }
        
      };
    } catch (error) {
      const err = {
        message: 'Error fetching books',
        code: error.response.status || 500 }
      throw new HttpException(err.message, err.code);
    }
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
