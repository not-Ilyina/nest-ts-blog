import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter<T extends HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const resp = ctx.getResponse();
    const status = exception.getStatus();
    const msg = exception.message ? exception.message : 'Service Error';
    resp.status(status).json({
      code: -1000, // TODO
      message: msg,
      data: null,
    });
  }
}
