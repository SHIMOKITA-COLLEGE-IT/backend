import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RootsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
