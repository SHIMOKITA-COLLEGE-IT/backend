import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RootsCountAggregate } from './roots-count-aggregate.output';
import { RootsAvgAggregate } from './roots-avg-aggregate.output';
import { RootsSumAggregate } from './roots-sum-aggregate.output';
import { RootsMinAggregate } from './roots-min-aggregate.output';
import { RootsMaxAggregate } from './roots-max-aggregate.output';

@ObjectType()
export class AggregateRoots {

    @Field(() => RootsCountAggregate, {nullable:true})
    _count?: RootsCountAggregate;

    @Field(() => RootsAvgAggregate, {nullable:true})
    _avg?: RootsAvgAggregate;

    @Field(() => RootsSumAggregate, {nullable:true})
    _sum?: RootsSumAggregate;

    @Field(() => RootsMinAggregate, {nullable:true})
    _min?: RootsMinAggregate;

    @Field(() => RootsMaxAggregate, {nullable:true})
    _max?: RootsMaxAggregate;
}
