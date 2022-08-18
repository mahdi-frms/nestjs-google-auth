import { Controller, Get, Redirect, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService, GoogleGuard, JWTGuard } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(GoogleGuard)
  getLogin() {
    return;
  }

  @Get('logout')
  @UseGuards(JWTGuard)
  getLogout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('access-token');
    return;
  }

  @Get('redirect')
  @Redirect('/home')
  @UseGuards(GoogleGuard)
  async googleRedirect(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { user } = req;
    const token = await this.authService.generateToken(user);
    res.cookie('access-token', token);
  }
}
