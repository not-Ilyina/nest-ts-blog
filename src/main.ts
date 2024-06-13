import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform/transform.interceptor';
// import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 全局注册过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(5000);
}
bootstrap();
