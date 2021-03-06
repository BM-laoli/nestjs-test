import { Module } from '@nestjs/common';
import { TestModulesService } from './testMules.service';
import { TestMulesController } from './testMules.controller';
import { MyLibraryModule } from "@lib/my-library/src";
// import { ConfigModule } from '@nestjs/config';
// import config from '../../../../../config';

@Module({
  // 注入库  和config（设置全局可用）
  imports: [MyLibraryModule],
  controllers: [TestMulesController],
  providers: [TestModulesService],
})
export class TestModule {}
