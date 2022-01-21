import { Test, TestingModule } from '@nestjs/testing';
import { MyAppXController } from './my-app-x.controller';
import { MyAppXService } from './my-app-x.service';

describe('MyAppXController', () => {
  let myAppXController: MyAppXController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyAppXController],
      providers: [MyAppXService],
    }).compile();

    myAppXController = app.get<MyAppXController>(MyAppXController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myAppXController.getHello()).toBe('Hello World!');
    });
  });
});
