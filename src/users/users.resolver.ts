import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from 'src/prisma/graphql/user/user.model';
import {
  UserCreateInput,
  UserUpdateInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from 'src/prisma/graphql/user';
import { IsValid } from './models/is-valid.output';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtPayload } from 'src/auth/strategies/jwt.strategy';
import {
  Profile,
  ProfileCreateInput,
  ProfileCreateWithoutUserInput,
} from 'src/prisma/graphql/profile';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prismaService: PrismaService,
  ) {}

  @Query(() => User)
  whoAmI(@CurrentUser() user: JwtPayload) {
    return this.usersService.findUnique({
      where: { id: user.id },
      include: { profile: true },
    });
  }

  @Query(() => IsValid)
  validateUsername(@Args('username') username: string) {
    return this.usersService.validateUsername(username);
  }

  // @Mutation(() => Profile)
  // registerProfile(
  //   @CurrentUser() user: JwtPayload,
  //   @Args('data') data: ProfileCreateWithoutUserInput,
  // ) {
  //   return this.prismaService.profile.create({
  //     data: { ...data, user: { connect: { id: user.id } } },
  //   });
  // }

  @Query(() => [User], { name: 'users' })
  findAll(@Args('where') where: UserWhereInput) {
    return this.usersService.findMany({ where, include: { profile: true } });
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.findUnique({ where, include: { profile: true } });
  }
}
