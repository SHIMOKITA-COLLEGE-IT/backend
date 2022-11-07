import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommitteeCountOrderByAggregateInput } from './committee-count-order-by-aggregate.input';
import { CommitteeAvgOrderByAggregateInput } from './committee-avg-order-by-aggregate.input';
import { CommitteeMaxOrderByAggregateInput } from './committee-max-order-by-aggregate.input';
import { CommitteeMinOrderByAggregateInput } from './committee-min-order-by-aggregate.input';
import { CommitteeSumOrderByAggregateInput } from './committee-sum-order-by-aggregate.input';

@InputType()
export class CommitteeOrderByWithAggregationInput {

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

    @Field(() => CommitteeCountOrderByAggregateInput, {nullable:true})
    _count?: CommitteeCountOrderByAggregateInput;

    @Field(() => CommitteeAvgOrderByAggregateInput, {nullable:true})
    _avg?: CommitteeAvgOrderByAggregateInput;

    @Field(() => CommitteeMaxOrderByAggregateInput, {nullable:true})
    _max?: CommitteeMaxOrderByAggregateInput;

    @Field(() => CommitteeMinOrderByAggregateInput, {nullable:true})
    _min?: CommitteeMinOrderByAggregateInput;

    @Field(() => CommitteeSumOrderByAggregateInput, {nullable:true})
    _sum?: CommitteeSumOrderByAggregateInput;
}
