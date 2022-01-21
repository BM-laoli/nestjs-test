import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { TestModulesService } from '../service/testMules.service';

@Controller('/v1/b')
export class TestMulesController {
  constructor(private readonly TestModulesService: TestModulesService) {}

  @Get()
  async getTokens(
    @Req() req: Request,
    @Res() res: Response,
    @Query() query: any,
  ) {
    this.TestModulesService.getValueX();
    return '6666';
  }
}
