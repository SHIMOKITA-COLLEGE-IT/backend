import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { Auth } from './models';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => Auth)
  login(@Args('firebaseIdToken') firebaseIdToken: string) {
    return this.authService.login(firebaseIdToken);
  }
}
