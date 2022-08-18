import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Config } from 'src/config/config.module';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('Config') private readonly config: Config) {
    super({
      jwtFromRequest: JwtStrategy.extract,
      secretOrKey: config.jwtSecret,
    });
  }

  private static extract(req: Request): string | null {
    if (
      req.cookies &&
      'access-token' in req.cookies &&
      req.cookies['access-token'].length > 0
    ) {
      return req.cookies['access-token'];
    }
    return null;
  }

  async validate(payload: any) {
    return payload;
  }
}
