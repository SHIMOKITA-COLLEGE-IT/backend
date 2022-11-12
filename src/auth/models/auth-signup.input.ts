import { InputType, OmitType } from '@nestjs/graphql';
import { UserCreateInput } from 'src/prisma/graphql/user';

@InputType()
export class AuthSignupInput extends OmitType(UserCreateInput, [
  'firebaseAuthUid',
  'id',
  'createdAt',
  'updatedAt',
  'disabled',
] as const) {}
