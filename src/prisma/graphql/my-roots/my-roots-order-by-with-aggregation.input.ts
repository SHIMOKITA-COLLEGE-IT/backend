import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MyRootsCountOrderByAggregateInput } from './my-roots-count-order-by-aggregate.input';
import { MyRootsAvgOrderByAggregateInput } from './my-roots-avg-order-by-aggregate.input';
import { MyRootsMaxOrderByAggregateInput } from './my-roots-max-order-by-aggregate.input';
import { MyRootsMinOrderByAggregateInput } from './my-roots-min-order-by-aggregate.input';
import { MyRootsSumOrderByAggregateInput } from './my-roots-sum-order-by-aggregate.input';

@InputType()
export class MyRootsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rootsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => MyRootsCountOrderByAggregateInput, {nullable:true})
    _count?: MyRootsCountOrderByAggregateInput;

    @Field(() => MyRootsAvgOrderByAggregateInput, {nullable:true})
    _avg?: MyRootsAvgOrderByAggregateInput;

    @Field(() => MyRootsMaxOrderByAggregateInput, {nullable:true})
    _max?: MyRootsMaxOrderByAggregateInput;

    @Field(() => MyRootsMinOrderByAggregateInput, {nullable:true})
    _min?: MyRootsMinOrderByAggregateInput;

    @Field(() => MyRootsSumOrderByAggregateInput, {nullable:true})
    _sum?: MyRootsSumOrderByAggregateInput;
}
