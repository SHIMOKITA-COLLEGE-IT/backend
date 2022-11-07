import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShimokitaCollegeProfileCountOrderByAggregateInput } from './shimokita-college-profile-count-order-by-aggregate.input';
import { ShimokitaCollegeProfileAvgOrderByAggregateInput } from './shimokita-college-profile-avg-order-by-aggregate.input';
import { ShimokitaCollegeProfileMaxOrderByAggregateInput } from './shimokita-college-profile-max-order-by-aggregate.input';
import { ShimokitaCollegeProfileMinOrderByAggregateInput } from './shimokita-college-profile-min-order-by-aggregate.input';
import { ShimokitaCollegeProfileSumOrderByAggregateInput } from './shimokita-college-profile-sum-order-by-aggregate.input';

@InputType()
export class ShimokitaCollegeProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAlumni?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slackEmail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roomNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ShimokitaCollegeProfileCountOrderByAggregateInput, {nullable:true})
    _count?: ShimokitaCollegeProfileCountOrderByAggregateInput;

    @Field(() => ShimokitaCollegeProfileAvgOrderByAggregateInput, {nullable:true})
    _avg?: ShimokitaCollegeProfileAvgOrderByAggregateInput;

    @Field(() => ShimokitaCollegeProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: ShimokitaCollegeProfileMaxOrderByAggregateInput;

    @Field(() => ShimokitaCollegeProfileMinOrderByAggregateInput, {nullable:true})
    _min?: ShimokitaCollegeProfileMinOrderByAggregateInput;

    @Field(() => ShimokitaCollegeProfileSumOrderByAggregateInput, {nullable:true})
    _sum?: ShimokitaCollegeProfileSumOrderByAggregateInput;
}
