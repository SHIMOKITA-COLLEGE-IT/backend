import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRootsTracingAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rootsId?: true;
}
