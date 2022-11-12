import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { initializeApp } from 'firebase-admin/app';
import { DecodedIdToken, getAuth } from 'firebase-admin/auth';
import { Strategy } from 'passport-http-bearer';
import { UsersService } from 'src/users/users.service';

export const FIREBASE_AUTH_STRATEGY = 'firebase-auth';

export type FirebaseAuthPayload = Pick<
  DecodedIdToken,
  'uid' | 'email' | 'picture'
>;

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  FIREBASE_AUTH_STRATEGY,
) {
  constructor(private readonly usersService: UsersService) {
    super();
    initializeApp();
  }

  async validate(payload: string): Promise<FirebaseAuthPayload> {
    return await getAuth()
      .verifyIdToken(payload)
      .catch((error) => {
        throw new UnauthorizedException(error);
      });
  }
}
