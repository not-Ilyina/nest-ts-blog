import { Controller, Get, Put, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(): string {
    return this.appService.getHello();
  }
  @Get('callback')
  getCallback(@Query('callback') callback: string, @Res() res: Response) {
    const data = {
      msg: 2134312,
    };
    const jsonp = `${callback}(${JSON.stringify(data)})`;
    res.setHeader('Content-Type', 'application/javascript');
    res.send(jsonp);
  }
  @Get('test')
  getTest(@Res({ passthrough: true }) response: Response) {
    response.cookie('key', '123321', {
      expires: new Date('2024-09-10'),
    });
    return 'test';
  }
  @Put('test')
  getTest1() {
    return 'test';
  }
}
