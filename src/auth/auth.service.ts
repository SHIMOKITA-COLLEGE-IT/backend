import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './strategies/jwt.strategy';
import { AuthLogin, AuthSignup, AuthSignupInput } from './models';
import { JwtService } from '@nestjs/jwt';
import { UserCreateInput } from 'src/prisma/graphql/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(firebaseAuthUid: string): Promise<AuthLogin> {
    const user = await this.usersService.findUniqueOrThrow({
      where: { firebaseAuthUid },
    });

    if (user.disabled) throw new ForbiddenException();

    const payload: JwtPayload = { id: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async signup({
    firebaseAuthUid,
    data,
  }: {
    firebaseAuthUid: string;
    data: AuthSignupInput;
  }): Promise<AuthSignup> {
    const user = await this.usersService.create({
      data: { firebaseAuthUid, ...data },
    });

    const payload: JwtPayload = { id: user.id };
    return { accessToken: this.jwtService.sign(payload), user };
  }
}
