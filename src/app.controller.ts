import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Config } from './config/config.module';

@Controller()
export class AppController {
  constructor(
    @Inject('Config')
    private readonly config: Config,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return 'hello world!';
  }
}
