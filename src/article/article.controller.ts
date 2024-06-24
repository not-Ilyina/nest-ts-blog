import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Response } from 'express';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create')
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get('list')
  findAll(@Res({ passthrough: true }) response: Response) {
    response.cookie('key', '123321', {
      // httpOnly: true,
      expires: new Date('2024-09-10'),
    });
    return this.articleService.findAll();
  }

  @Get()
  findOne(@Query('id') id: number) {
    return this.articleService.findOne(id);
  }

  @Post('edit')
  update(@Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(updateArticleDto);
  }

  @Post('delete')
  remove(@Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.remove(updateArticleDto.id);
  }
}
