import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RootsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rootsType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    googleMapUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    introductionUrl?: keyof typeof SortOrder;
}
