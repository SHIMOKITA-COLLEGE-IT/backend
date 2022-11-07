import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCountAggregate } from './shimokita-college-profile-count-aggregate.output';
import { ShimokitaCollegeProfileAvgAggregate } from './shimokita-college-profile-avg-aggregate.output';
import { ShimokitaCollegeProfileSumAggregate } from './shimokita-college-profile-sum-aggregate.output';
import { ShimokitaCollegeProfileMinAggregate } from './shimokita-college-profile-min-aggregate.output';
import { ShimokitaCollegeProfileMaxAggregate } from './shimokita-college-profile-max-aggregate.output';

@ObjectType()
export class ShimokitaCollegeProfileGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Boolean, {nullable:false})
    isAlumni!: boolean;

    @Field(() => String, {nullable:false})
    slackEmail!: string;

    @Field(() => Int, {nullable:false})
    roomNumber!: number;

    @Field(() => Int, {nullable:false})
    postNumber!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
