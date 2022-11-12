import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    roomNumber?: true;

    @Field(() => Boolean, {nullable:true})
    postNumber?: true;
}
