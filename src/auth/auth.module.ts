import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '2 days' },
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    { provide: APP_GUARD, useClass: GqlAuthGuard },
    JwtStrategy,
  ],
})
export class AuthModule {}
