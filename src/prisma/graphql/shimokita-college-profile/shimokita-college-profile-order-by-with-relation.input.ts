import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { ProgramOrderByRelationAggregateInput } from '../program/program-order-by-relation-aggregate.input';
import { HouseOrderByRelationAggregateInput } from '../house/house-order-by-relation-aggregate.input';
import { HomeOrderByRelationAggregateInput } from '../home/home-order-by-relation-aggregate.input';
import { CommitteeOrderByRelationAggregateInput } from '../committee/committee-order-by-relation-aggregate.input';
import { ClubOrderByRelationAggregateInput } from '../club/club-order-by-relation-aggregate.input';

@InputType()
export class ShimokitaCollegeProfileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

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

    @Field(() => ProgramOrderByRelationAggregateInput, {nullable:true})
    programs?: ProgramOrderByRelationAggregateInput;

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
