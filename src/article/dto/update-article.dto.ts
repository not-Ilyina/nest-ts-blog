import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  id: string;
  title: string;
  createTime: Date;
  updateTime: Date;
}
