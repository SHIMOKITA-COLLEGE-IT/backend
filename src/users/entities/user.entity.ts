import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsAlphanumeric } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;
  // firebaseUid!: string;
  @IsAlphanumeric()
  username: string;
  firstName: string;
  lastName: string;
  position: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
}
