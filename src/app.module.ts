import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorsMiddleware } from './cors.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ArticleModule } from './article/article.module';

import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';
import { UserModule } from './user/user.module';

// 装饰器 可以说是一种注解
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'blog_schema',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ArticleModule,
    UserModule,
  ],
  controllers: [AppController, UserController, ArticleController],
  providers: [AppService, UserService, ArticleService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
