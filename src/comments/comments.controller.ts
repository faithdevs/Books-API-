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
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {Request, Response} from 'express';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('postbook/:id')
  async create(
    @Body() createCommentDto: CreateCommentDto,
    @Res() res: Response,
    @Param('id') id: number
  ): Promise<Response> {

    const data = await this.commentsService.create(createCommentDto);
    return res.status(200).json({
      message: 'Comment created successfully',
      data,

    }) 
  }
  // {
  //   // return this.commentsService.create(createCommentDto);
  // }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get('fetchBook/:id')
  async findById(
    @Param('id') id: number,
    @Res() res: Response
    ): Promise<Response> {
    const [message, frequency] = await this.commentsService.commentFromBook(id,true);
    return res.status(200).json({
      message: 'Comment fetched successfully',
      data: {
        message, totalCountOfComments:frequency
      }
    })
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
  //   return this.commentsService.update(+id, updateCommentDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commentsService.remove(+id);
  // }
}
