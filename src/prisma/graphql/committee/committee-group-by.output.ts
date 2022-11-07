import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommitteeCountAggregate } from './committee-count-aggregate.output';
import { CommitteeAvgAggregate } from './committee-avg-aggregate.output';
import { CommitteeSumAggregate } from './committee-sum-aggregate.output';
import { CommitteeMinAggregate } from './committee-min-aggregate.output';
import { CommitteeMaxAggregate } from './committee-max-aggregate.output';

@ObjectType()
export class CommitteeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CommitteeCountAggregate, {nullable:true})
    _count?: CommitteeCountAggregate;

    @Field(() => CommitteeAvgAggregate, {nullable:true})
    _avg?: CommitteeAvgAggregate;

    @Field(() => CommitteeSumAggregate, {nullable:true})
    _sum?: CommitteeSumAggregate;

    @Field(() => CommitteeMinAggregate, {nullable:true})
    _min?: CommitteeMinAggregate;

    @Field(() => CommitteeMaxAggregate, {nullable:true})
    _max?: CommitteeMaxAggregate;
}
