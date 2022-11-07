import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HomeCountOrderByAggregateInput } from './home-count-order-by-aggregate.input';
import { HomeAvgOrderByAggregateInput } from './home-avg-order-by-aggregate.input';
import { HomeMaxOrderByAggregateInput } from './home-max-order-by-aggregate.input';
import { HomeMinOrderByAggregateInput } from './home-min-order-by-aggregate.input';
import { HomeSumOrderByAggregateInput } from './home-sum-order-by-aggregate.input';

@InputType()
export class HomeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HomeCountOrderByAggregateInput, {nullable:true})
    _count?: HomeCountOrderByAggregateInput;

    @Field(() => HomeAvgOrderByAggregateInput, {nullable:true})
    _avg?: HomeAvgOrderByAggregateInput;

    @Field(() => HomeMaxOrderByAggregateInput, {nullable:true})
    _max?: HomeMaxOrderByAggregateInput;

    @Field(() => HomeMinOrderByAggregateInput, {nullable:true})
    _min?: HomeMinOrderByAggregateInput;

    @Field(() => HomeSumOrderByAggregateInput, {nullable:true})
    _sum?: HomeSumOrderByAggregateInput;
}
