import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCountAggregate } from './shimokita-college-profile-count-aggregate.output';
import { ShimokitaCollegeProfileAvgAggregate } from './shimokita-college-profile-avg-aggregate.output';
import { ShimokitaCollegeProfileSumAggregate } from './shimokita-college-profile-sum-aggregate.output';
import { ShimokitaCollegeProfileMinAggregate } from './shimokita-college-profile-min-aggregate.output';
import { ShimokitaCollegeProfileMaxAggregate } from './shimokita-college-profile-max-aggregate.output';

@ObjectType()
export class AggregateShimokitaCollegeProfile {

    @Field(() => ShimokitaCollegeProfileCountAggregate, {nullable:true})
    _count?: ShimokitaCollegeProfileCountAggregate;

    @Field(() => ShimokitaCollegeProfileAvgAggregate, {nullable:true})
    _avg?: ShimokitaCollegeProfileAvgAggregate;

    @Field(() => ShimokitaCollegeProfileSumAggregate, {nullable:true})
    _sum?: ShimokitaCollegeProfileSumAggregate;

    @Field(() => ShimokitaCollegeProfileMinAggregate, {nullable:true})
    _min?: ShimokitaCollegeProfileMinAggregate;

    @Field(() => ShimokitaCollegeProfileMaxAggregate, {nullable:true})
    _max?: ShimokitaCollegeProfileMaxAggregate;
}
