import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CommitteeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
