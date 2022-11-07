import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MyRootsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    profileId?: true;

    @Field(() => Boolean, {nullable:true})
    rootsId?: true;

    @Field(() => Boolean, {nullable:true})
    from?: true;

    @Field(() => Boolean, {nullable:true})
    to?: true;
}
