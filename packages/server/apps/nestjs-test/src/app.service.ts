import { MyLibraryService } from '@lib/my-library/src';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly myLibraryService: MyLibraryService) {}

  getHello(): string {
    return (
      'Service NEST-TSEST-MAIN 3001' +
      this.myLibraryService.MyLibraryServiceCall()
    );
  }
}
