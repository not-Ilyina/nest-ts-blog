import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const accessAllowedOrigins = [
      'http://localhost:3000',
      'http://127.0.0.1:5501',
    ];
    const requestOrigin = req.header('Origin');
    if (accessAllowedOrigins.includes(requestOrigin)) {
      res.setHeader('Access-Control-Allow-Origin', requestOrigin);
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
      res.setHeader('Access-Control-Allow-Headers', 'Content-type');

      // 预检请求
      if (req.method === 'OPTIONS') {
        return res.sendStatus(204); // No Content 成功状态响应码
      }
    }

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie'); // 允许客户端拿到哪些 header
    next();
  }
}
