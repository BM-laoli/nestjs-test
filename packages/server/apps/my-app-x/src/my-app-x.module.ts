import { Module } from '@nestjs/common';
import { MyAppXController } from './my-app-x.controller';
import { MyAppXService } from './my-app-x.service';

@Module({
  imports: [],
  controllers: [MyAppXController],
  providers: [MyAppXService],
})
export class MyAppXModule {}
