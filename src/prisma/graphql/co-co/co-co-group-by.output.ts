import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CoCoCountAggregate } from './co-co-count-aggregate.output';
import { CoCoAvgAggregate } from './co-co-avg-aggregate.output';
import { CoCoSumAggregate } from './co-co-sum-aggregate.output';
import { CoCoMinAggregate } from './co-co-min-aggregate.output';
import { CoCoMaxAggregate } from './co-co-max-aggregate.output';

@ObjectType()
export class CoCoGroupBy {

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

    @Field(() => CoCoCountAggregate, {nullable:true})
    _count?: CoCoCountAggregate;

    @Field(() => CoCoAvgAggregate, {nullable:true})
    _avg?: CoCoAvgAggregate;

    @Field(() => CoCoSumAggregate, {nullable:true})
    _sum?: CoCoSumAggregate;

    @Field(() => CoCoMinAggregate, {nullable:true})
    _min?: CoCoMinAggregate;

    @Field(() => CoCoMaxAggregate, {nullable:true})
    _max?: CoCoMaxAggregate;
}
