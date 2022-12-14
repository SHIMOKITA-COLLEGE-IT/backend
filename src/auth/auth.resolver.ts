import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import {
  FirebaseAuthGuard,
  FIREBASE_AUTH_DESCRIPTION,
} from './guards/firebase-auth.guard';
import { AuthLogin, AuthSignup, AuthSignupInput, IsValid } from './models';
import { FirebaseAuthPayload } from './strategies/firebase-auth.strategy';

@UseGuards(FirebaseAuthGuard)
@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => AuthLogin, {
    description: FIREBASE_AUTH_DESCRIPTION,
  })
  login(@CurrentUser() user: FirebaseAuthPayload): Promise<AuthLogin> {
    return this.authService.login(user.uid);
  }

  @Mutation(() => AuthSignup, {
    description: FIREBASE_AUTH_DESCRIPTION,
  })
  signup(
    @CurrentUser() user: FirebaseAuthPayload,
    @Args('data') data: AuthSignupInput,
  ): Promise<AuthSignup> {
    return this.authService.signup({ firebaseAuthUid: user.uid, data });
  }

  @Query(() => IsValid, {
    description: FIREBASE_AUTH_DESCRIPTION,
  })
  async validateUsername(@Args('username') username: string): Promise<IsValid> {
    return { isValid: await this.usersService.validateUsername(username) };
  }
}
