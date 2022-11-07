import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CoCoCountOrderByAggregateInput } from './co-co-count-order-by-aggregate.input';
import { CoCoAvgOrderByAggregateInput } from './co-co-avg-order-by-aggregate.input';
import { CoCoMaxOrderByAggregateInput } from './co-co-max-order-by-aggregate.input';
import { CoCoMinOrderByAggregateInput } from './co-co-min-order-by-aggregate.input';
import { CoCoSumOrderByAggregateInput } from './co-co-sum-order-by-aggregate.input';

@InputType()
export class CoCoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slackChannel?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CoCoCountOrderByAggregateInput, {nullable:true})
    _count?: CoCoCountOrderByAggregateInput;

    @Field(() => CoCoAvgOrderByAggregateInput, {nullable:true})
    _avg?: CoCoAvgOrderByAggregateInput;

    @Field(() => CoCoMaxOrderByAggregateInput, {nullable:true})
    _max?: CoCoMaxOrderByAggregateInput;

    @Field(() => CoCoMinOrderByAggregateInput, {nullable:true})
    _min?: CoCoMinOrderByAggregateInput;

    @Field(() => CoCoSumOrderByAggregateInput, {nullable:true})
    _sum?: CoCoSumOrderByAggregateInput;
}
