import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRootsTracingSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rootsId?: true;
}
