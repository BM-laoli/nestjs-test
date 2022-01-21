import { Controller, Get } from '@nestjs/common';
import { MyAppXService } from './my-app-x.service';

@Controller()
export class MyAppXController {
  constructor(private readonly myAppXService: MyAppXService) {}

  @Get()
  getHello(): string {
    return this.myAppXService.getHello();
  }
}
