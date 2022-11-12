import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRootsTracingCountOrderByAggregateInput } from './user-roots-tracing-count-order-by-aggregate.input';
import { UserRootsTracingAvgOrderByAggregateInput } from './user-roots-tracing-avg-order-by-aggregate.input';
import { UserRootsTracingMaxOrderByAggregateInput } from './user-roots-tracing-max-order-by-aggregate.input';
import { UserRootsTracingMinOrderByAggregateInput } from './user-roots-tracing-min-order-by-aggregate.input';
import { UserRootsTracingSumOrderByAggregateInput } from './user-roots-tracing-sum-order-by-aggregate.input';

@InputType()
export class UserRootsTracingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rootsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => UserRootsTracingCountOrderByAggregateInput, {nullable:true})
    _count?: UserRootsTracingCountOrderByAggregateInput;

    @Field(() => UserRootsTracingAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserRootsTracingAvgOrderByAggregateInput;

    @Field(() => UserRootsTracingMaxOrderByAggregateInput, {nullable:true})
    _max?: UserRootsTracingMaxOrderByAggregateInput;

    @Field(() => UserRootsTracingMinOrderByAggregateInput, {nullable:true})
    _min?: UserRootsTracingMinOrderByAggregateInput;

    @Field(() => UserRootsTracingSumOrderByAggregateInput, {nullable:true})
    _sum?: UserRootsTracingSumOrderByAggregateInput;
}
