import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from 'src/prisma/graphql/user/user.model';
import { UserWhereInput, UserWhereUniqueInput } from 'src/prisma/graphql/user';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtPayload } from 'src/auth/strategies/jwt.strategy';
import {
  JwtAuthGuard,
  JWT_AUTH_DESCRIPTION,
} from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { description: JWT_AUTH_DESCRIPTION })
  whoAmI(@CurrentUser() user: JwtPayload): Promise<User> {
    return this.usersService.findUnique({
      where: { id: user.id },
    });
  }

  @Query(() => [User], { name: 'users', description: JWT_AUTH_DESCRIPTION })
  findAll(@Args('where') where: UserWhereInput): Promise<User[]> {
    return this.usersService.findMany({ where });
  }

  @Query(() => User, { name: 'user', description: JWT_AUTH_DESCRIPTION })
  findOne(@Args('where') where: UserWhereUniqueInput): Promise<User> {
    return this.usersService.findUnique({ where });
  }
}
