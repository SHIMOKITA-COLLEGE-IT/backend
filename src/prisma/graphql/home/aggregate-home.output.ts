import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HomeCountAggregate } from './home-count-aggregate.output';
import { HomeAvgAggregate } from './home-avg-aggregate.output';
import { HomeSumAggregate } from './home-sum-aggregate.output';
import { HomeMinAggregate } from './home-min-aggregate.output';
import { HomeMaxAggregate } from './home-max-aggregate.output';

@ObjectType()
export class AggregateHome {

    @Field(() => HomeCountAggregate, {nullable:true})
    _count?: HomeCountAggregate;

    @Field(() => HomeAvgAggregate, {nullable:true})
    _avg?: HomeAvgAggregate;

    @Field(() => HomeSumAggregate, {nullable:true})
    _sum?: HomeSumAggregate;

    @Field(() => HomeMinAggregate, {nullable:true})
    _min?: HomeMinAggregate;

    @Field(() => HomeMaxAggregate, {nullable:true})
    _max?: HomeMaxAggregate;
}
