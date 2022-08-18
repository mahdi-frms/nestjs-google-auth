import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Config } from '../config/config.module';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('Config') private readonly config: Config,
  ) {}

  async generateToken(user: User): Promise<string> {
    return await this.jwtService.signAsync(user, {
      secret: this.config.jwtSecret,
    });
  }
}

export class JWTGuard extends AuthGuard('jwt') {}
export class GoogleGuard extends AuthGuard('google') {}
