import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class IsValid {
  @Field()
  isValid: boolean;
}
