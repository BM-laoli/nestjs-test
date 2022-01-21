import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppXService {
  getHello(): string {
    return 'Hello World!';
  }
}
