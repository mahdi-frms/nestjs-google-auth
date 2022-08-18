import { Module } from '@nestjs/common';
import { AuthService, GoogleGuard, JWTGuard } from './auth.service';
import { AuthController } from './auth.controller';
import { Passport } from 'passport';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [Passport, JwtModule],
  providers: [AuthService, GoogleStrategy, JwtStrategy, GoogleGuard, JWTGuard],
  exports: [JWTGuard],
  controllers: [AuthController],
})
export class AuthModule {}
