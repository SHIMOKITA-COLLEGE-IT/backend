import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByRelationAggregateInput } from '../profile/profile-order-by-relation-aggregate.input';
import { HouseOrderByRelationAggregateInput } from '../house/house-order-by-relation-aggregate.input';
import { HomeOrderByRelationAggregateInput } from '../home/home-order-by-relation-aggregate.input';
import { CommitteeOrderByRelationAggregateInput } from '../committee/committee-order-by-relation-aggregate.input';
import { ClubOrderByRelationAggregateInput } from '../club/club-order-by-relation-aggregate.input';

@InputType()
export class PhotoOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alt?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByRelationAggregateInput, {nullable:true})
    profiles?: ProfileOrderByRelationAggregateInput;

    @Field(() => HouseOrderByRelationAggregateInput, {nullable:true})
    houses?: HouseOrderByRelationAggregateInput;

    @Field(() => HomeOrderByRelationAggregateInput, {nullable:true})
    homes?: HomeOrderByRelationAggregateInput;

    @Field(() => CommitteeOrderByRelationAggregateInput, {nullable:true})
    committee?: CommitteeOrderByRelationAggregateInput;

    @Field(() => ClubOrderByRelationAggregateInput, {nullable:true})
    clubs?: ClubOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
