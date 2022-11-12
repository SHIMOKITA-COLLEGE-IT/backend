import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRootsTracingCountAggregate } from './user-roots-tracing-count-aggregate.output';
import { UserRootsTracingAvgAggregate } from './user-roots-tracing-avg-aggregate.output';
import { UserRootsTracingSumAggregate } from './user-roots-tracing-sum-aggregate.output';
import { UserRootsTracingMinAggregate } from './user-roots-tracing-min-aggregate.output';
import { UserRootsTracingMaxAggregate } from './user-roots-tracing-max-aggregate.output';

@ObjectType()
export class AggregateUserRootsTracing {

    @Field(() => UserRootsTracingCountAggregate, {nullable:true})
    _count?: UserRootsTracingCountAggregate;

    @Field(() => UserRootsTracingAvgAggregate, {nullable:true})
    _avg?: UserRootsTracingAvgAggregate;

    @Field(() => UserRootsTracingSumAggregate, {nullable:true})
    _sum?: UserRootsTracingSumAggregate;

    @Field(() => UserRootsTracingMinAggregate, {nullable:true})
    _min?: UserRootsTracingMinAggregate;

    @Field(() => UserRootsTracingMaxAggregate, {nullable:true})
    _max?: UserRootsTracingMaxAggregate;
}
