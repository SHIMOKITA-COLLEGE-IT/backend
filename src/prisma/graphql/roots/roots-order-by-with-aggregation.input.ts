import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RootsCountOrderByAggregateInput } from './roots-count-order-by-aggregate.input';
import { RootsAvgOrderByAggregateInput } from './roots-avg-order-by-aggregate.input';
import { RootsMaxOrderByAggregateInput } from './roots-max-order-by-aggregate.input';
import { RootsMinOrderByAggregateInput } from './roots-min-order-by-aggregate.input';
import { RootsSumOrderByAggregateInput } from './roots-sum-order-by-aggregate.input';

@InputType()
export class RootsOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RootsCountOrderByAggregateInput, {nullable:true})
    _count?: RootsCountOrderByAggregateInput;

    @Field(() => RootsAvgOrderByAggregateInput, {nullable:true})
    _avg?: RootsAvgOrderByAggregateInput;

    @Field(() => RootsMaxOrderByAggregateInput, {nullable:true})
    _max?: RootsMaxOrderByAggregateInput;

    @Field(() => RootsMinOrderByAggregateInput, {nullable:true})
    _min?: RootsMinOrderByAggregateInput;

    @Field(() => RootsSumOrderByAggregateInput, {nullable:true})
    _sum?: RootsSumOrderByAggregateInput;
}
