import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PhotoOrderByRelationAggregateInput } from '../photo/photo-order-by-relation-aggregate.input';
import { ShimokitaCollegeProfileOrderByRelationAggregateInput } from '../shimokita-college-profile/shimokita-college-profile-order-by-relation-aggregate.input';

@InputType()
export class CoCoOrderByWithRelationInput {

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

    @Field(() => PhotoOrderByRelationAggregateInput, {nullable:true})
    photos?: PhotoOrderByRelationAggregateInput;

    @Field(() => ShimokitaCollegeProfileOrderByRelationAggregateInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
