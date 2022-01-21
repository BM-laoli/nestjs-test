import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TestModulesService {
  private readonly serverConfigPathMap: any;
  constructor(private readonly configService: ConfigService) {
    this.serverConfigPathMap = {
      config1: this.configService.get('app'),
      config2: this.configService.get('APP2'),
    };
  }

  getValueX() {
    console.log('serverConfigPathMap====>', this.serverConfigPathMap);
    return 'getValueX';
  }
}
