import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MyRootsCountAggregate } from './my-roots-count-aggregate.output';
import { MyRootsAvgAggregate } from './my-roots-avg-aggregate.output';
import { MyRootsSumAggregate } from './my-roots-sum-aggregate.output';
import { MyRootsMinAggregate } from './my-roots-min-aggregate.output';
import { MyRootsMaxAggregate } from './my-roots-max-aggregate.output';

@ObjectType()
export class AggregateMyRoots {

    @Field(() => MyRootsCountAggregate, {nullable:true})
    _count?: MyRootsCountAggregate;

    @Field(() => MyRootsAvgAggregate, {nullable:true})
    _avg?: MyRootsAvgAggregate;

    @Field(() => MyRootsSumAggregate, {nullable:true})
    _sum?: MyRootsSumAggregate;

    @Field(() => MyRootsMinAggregate, {nullable:true})
    _min?: MyRootsMinAggregate;

    @Field(() => MyRootsMaxAggregate, {nullable:true})
    _max?: MyRootsMaxAggregate;
}
