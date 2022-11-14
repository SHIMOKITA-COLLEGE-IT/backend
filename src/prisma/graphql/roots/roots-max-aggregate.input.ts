import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RootsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    rootsType?: true;

    @Field(() => Boolean, {nullable:true})
    googleMapUrl?: true;

    @Field(() => Boolean, {nullable:true})
    introductionUrl?: true;
}
