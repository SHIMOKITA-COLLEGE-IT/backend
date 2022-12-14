import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { FIREBASE_AUTH_STRATEGY } from '../strategies/firebase-auth.strategy';

export const FIREBASE_AUTH_DESCRIPTION =
  '{ Authorization: Bearer <firebaseIdToken> }';

@Injectable()
export class FirebaseAuthGuard extends AuthGuard(FIREBASE_AUTH_STRATEGY) {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
