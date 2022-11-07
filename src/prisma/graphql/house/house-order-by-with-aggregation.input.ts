import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HouseCountOrderByAggregateInput } from './house-count-order-by-aggregate.input';
import { HouseAvgOrderByAggregateInput } from './house-avg-order-by-aggregate.input';
import { HouseMaxOrderByAggregateInput } from './house-max-order-by-aggregate.input';
import { HouseMinOrderByAggregateInput } from './house-min-order-by-aggregate.input';
import { HouseSumOrderByAggregateInput } from './house-sum-order-by-aggregate.input';

@InputType()
export class HouseOrderByWithAggregationInput {

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

    @Field(() => HouseCountOrderByAggregateInput, {nullable:true})
    _count?: HouseCountOrderByAggregateInput;

    @Field(() => HouseAvgOrderByAggregateInput, {nullable:true})
    _avg?: HouseAvgOrderByAggregateInput;

    @Field(() => HouseMaxOrderByAggregateInput, {nullable:true})
    _max?: HouseMaxOrderByAggregateInput;

    @Field(() => HouseMinOrderByAggregateInput, {nullable:true})
    _min?: HouseMinOrderByAggregateInput;

    @Field(() => HouseSumOrderByAggregateInput, {nullable:true})
    _sum?: HouseSumOrderByAggregateInput;
}
