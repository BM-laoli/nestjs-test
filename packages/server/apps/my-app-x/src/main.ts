import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { MyAppXModule } from './my-app-x.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MyAppXModule);
  //set api prefix
  // 设置服务器上的静态资源
  app.useStaticAssets(join(__dirname, '../../../', 'public/my-app-x'), {
    prefix: '/static',
  });
  await app.listen(3001);
}
bootstrap();
