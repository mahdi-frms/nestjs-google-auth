import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JWTGuard } from './auth/auth.service';

@Controller()
export class AppController {
  @Get('home')
  @UseGuards(JWTGuard)
  getHome(@Req() req): string {
    return `Hello ${req.user.firstName}`;
  }
}
