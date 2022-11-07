import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './strategies/jwt.strategy';
import { Auth } from './models';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
    initializeApp();
  }

  async login(firebaseIdToken: string): Promise<Auth> {
    const { uid, email, picture } = await getAuth()
      .verifyIdToken(firebaseIdToken)
      .catch((error) => {
        throw new UnauthorizedException(error);
      });

    const user = await this.usersService.upsert({
      where: { firebaseAuthUid: uid },
      create: { firebaseAuthUid: uid, email, imageUrl: picture },
      update: { firebaseAuthUid: uid, email, imageUrl: picture },
    });

    if (user.disabled) throw new ForbiddenException();

    const payload: JwtPayload = { id: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
