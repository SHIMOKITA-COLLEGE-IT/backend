import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SocialLinkCountOrderByAggregateInput } from './social-link-count-order-by-aggregate.input';
import { SocialLinkAvgOrderByAggregateInput } from './social-link-avg-order-by-aggregate.input';
import { SocialLinkMaxOrderByAggregateInput } from './social-link-max-order-by-aggregate.input';
import { SocialLinkMinOrderByAggregateInput } from './social-link-min-order-by-aggregate.input';
import { SocialLinkSumOrderByAggregateInput } from './social-link-sum-order-by-aggregate.input';

@InputType()
export class SocialLinkOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    socialLinkType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SocialLinkCountOrderByAggregateInput, {nullable:true})
    _count?: SocialLinkCountOrderByAggregateInput;

    @Field(() => SocialLinkAvgOrderByAggregateInput, {nullable:true})
    _avg?: SocialLinkAvgOrderByAggregateInput;

    @Field(() => SocialLinkMaxOrderByAggregateInput, {nullable:true})
    _max?: SocialLinkMaxOrderByAggregateInput;

    @Field(() => SocialLinkMinOrderByAggregateInput, {nullable:true})
    _min?: SocialLinkMinOrderByAggregateInput;

    @Field(() => SocialLinkSumOrderByAggregateInput, {nullable:true})
    _sum?: SocialLinkSumOrderByAggregateInput;
}
