import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GenerationCountOrderByAggregateInput } from './generation-count-order-by-aggregate.input';
import { GenerationAvgOrderByAggregateInput } from './generation-avg-order-by-aggregate.input';
import { GenerationMaxOrderByAggregateInput } from './generation-max-order-by-aggregate.input';
import { GenerationMinOrderByAggregateInput } from './generation-min-order-by-aggregate.input';
import { GenerationSumOrderByAggregateInput } from './generation-sum-order-by-aggregate.input';

@InputType()
export class GenerationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generationType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emoji?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hexColor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slackChannel?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photoUrls?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => GenerationCountOrderByAggregateInput, {nullable:true})
    _count?: GenerationCountOrderByAggregateInput;

    @Field(() => GenerationAvgOrderByAggregateInput, {nullable:true})
    _avg?: GenerationAvgOrderByAggregateInput;

    @Field(() => GenerationMaxOrderByAggregateInput, {nullable:true})
    _max?: GenerationMaxOrderByAggregateInput;

    @Field(() => GenerationMinOrderByAggregateInput, {nullable:true})
    _min?: GenerationMinOrderByAggregateInput;

    @Field(() => GenerationSumOrderByAggregateInput, {nullable:true})
    _sum?: GenerationSumOrderByAggregateInput;
}
