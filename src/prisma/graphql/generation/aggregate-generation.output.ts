import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenerationCountAggregate } from './generation-count-aggregate.output';
import { GenerationAvgAggregate } from './generation-avg-aggregate.output';
import { GenerationSumAggregate } from './generation-sum-aggregate.output';
import { GenerationMinAggregate } from './generation-min-aggregate.output';
import { GenerationMaxAggregate } from './generation-max-aggregate.output';

@ObjectType()
export class AggregateGeneration {

    @Field(() => GenerationCountAggregate, {nullable:true})
    _count?: GenerationCountAggregate;

    @Field(() => GenerationAvgAggregate, {nullable:true})
    _avg?: GenerationAvgAggregate;

    @Field(() => GenerationSumAggregate, {nullable:true})
    _sum?: GenerationSumAggregate;

    @Field(() => GenerationMinAggregate, {nullable:true})
    _min?: GenerationMinAggregate;

    @Field(() => GenerationMaxAggregate, {nullable:true})
    _max?: GenerationMaxAggregate;
}
