import { Controller, Get, Query, Res } from '@nestjs/common';
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
}
