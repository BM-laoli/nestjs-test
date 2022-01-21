import { Module } from '@nestjs/common';
import { MyLibraryModule } from '@app/my-library';
import { ConfigModule } from '@nestjs/config';
import config from '../../../config';
import { TestModule } from './modules/TestMules/test-modules.module';

@Module({
  // 注入库  和config（设置全局可用）
  imports: [
    MyLibraryModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: config,
    }),
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class MyAppModule {}
