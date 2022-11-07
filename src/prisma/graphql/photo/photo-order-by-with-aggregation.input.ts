import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PhotoCountOrderByAggregateInput } from './photo-count-order-by-aggregate.input';
import { PhotoAvgOrderByAggregateInput } from './photo-avg-order-by-aggregate.input';
import { PhotoMaxOrderByAggregateInput } from './photo-max-order-by-aggregate.input';
import { PhotoMinOrderByAggregateInput } from './photo-min-order-by-aggregate.input';
import { PhotoSumOrderByAggregateInput } from './photo-sum-order-by-aggregate.input';

@InputType()
export class PhotoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PhotoCountOrderByAggregateInput, {nullable:true})
    _count?: PhotoCountOrderByAggregateInput;

    @Field(() => PhotoAvgOrderByAggregateInput, {nullable:true})
    _avg?: PhotoAvgOrderByAggregateInput;

    @Field(() => PhotoMaxOrderByAggregateInput, {nullable:true})
    _max?: PhotoMaxOrderByAggregateInput;

    @Field(() => PhotoMinOrderByAggregateInput, {nullable:true})
    _min?: PhotoMinOrderByAggregateInput;

    @Field(() => PhotoSumOrderByAggregateInput, {nullable:true})
    _sum?: PhotoSumOrderByAggregateInput;
}
