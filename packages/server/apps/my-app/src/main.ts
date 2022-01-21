import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MyAppModule } from './my-app.module';
import * as compression from 'compression';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MyAppModule);
  app.enableCors(); //解决跨域
  app.use(compression()); //开启http网络传输压缩

  //set api prefix
  // 设置服务器上的静态资源
  app.useStaticAssets(join(__dirname, '../../../', 'public/my-app'), {
    prefix: '/static',
  });

  await app.listen(3000);
}
bootstrap();
