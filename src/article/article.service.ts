import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly aritcleRepository: Repository<Article>,
  ) {}
  async create(createArticleDto: CreateArticleDto) {
    return await this.aritcleRepository.save(createArticleDto);
  }

  async findAll() {
    return await this.aritcleRepository.find({
      where: {},
      order: {
        mtime: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  async update(updateArticleDto: UpdateArticleDto) {
    const { id } = updateArticleDto;
    return await this.aritcleRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
