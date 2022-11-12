import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from 'src/prisma/graphql/user/user.model';
import { UserWhereInput, UserWhereUniqueInput } from 'src/prisma/graphql/user';
import { IsValid } from './models/is-valid.output';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtPayload } from 'src/auth/strategies/jwt.strategy';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  whoAmI(@CurrentUser() user: JwtPayload): Promise<User> {
    return this.usersService.findUnique({
      where: { id: user.id },
    });
  }

  @Query(() => IsValid)
  async validateUsername(@Args('username') username: string): Promise<IsValid> {
    return { isValid: await this.usersService.validateUsername(username) };
  }

  @Query(() => [User], { name: 'users' })
  findAll(@Args('where') where: UserWhereInput): Promise<User[]> {
    return this.usersService.findMany({ where });
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('where') where: UserWhereUniqueInput): Promise<User> {
    return this.usersService.findUnique({ where });
  }
}
