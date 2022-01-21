import { Injectable } from '@nestjs/common';

@Injectable()
export class MyLibraryService {
  MyLibraryServiceCall() {
    return 'MyLibraryServiceCall';
  }
}
