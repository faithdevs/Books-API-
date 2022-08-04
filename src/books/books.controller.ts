import {
  Controller,
  Post,
  Body,
  Get,
  Res,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Response } from 'express';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get('books')
  async findAll(
    @Res() res: Response
  ){
    const data = await this.booksService.findAll()
    return res.status(200).json({
      message: 'Books fetched successfully',
      books:data
    })
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const data = await this.booksService.findOne(id)
    return res.status(200).json({
      message: 'Book fetched successfully',
      book:data
    })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
