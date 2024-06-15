import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  id: number;
  title: string;
  sub_title: string;
  content: string;
  like: number;
  read: number;
  collection: number;
  img: string;
  author: string;
}
