import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/prisma/graphql/user';

@ObjectType()
export class AuthSignup {
  @Field()
  accessToken: string;

  @Field(() => User, { nullable: false })
  user: User;
}
