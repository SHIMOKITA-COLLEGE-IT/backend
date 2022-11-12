import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRootsTracingWhereInput } from './user-roots-tracing-where.input';
import { Type } from 'class-transformer';
import { UserRootsTracingOrderByWithAggregationInput } from './user-roots-tracing-order-by-with-aggregation.input';
import { UserRootsTracingScalarFieldEnum } from './user-roots-tracing-scalar-field.enum';
import { UserRootsTracingScalarWhereWithAggregatesInput } from './user-roots-tracing-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserRootsTracingCountAggregateInput } from './user-roots-tracing-count-aggregate.input';
import { UserRootsTracingAvgAggregateInput } from './user-roots-tracing-avg-aggregate.input';
import { UserRootsTracingSumAggregateInput } from './user-roots-tracing-sum-aggregate.input';
import { UserRootsTracingMinAggregateInput } from './user-roots-tracing-min-aggregate.input';
import { UserRootsTracingMaxAggregateInput } from './user-roots-tracing-max-aggregate.input';

@ArgsType()
export class UserRootsTracingGroupByArgs {

    @Field(() => UserRootsTracingWhereInput, {nullable:true})
    @Type(() => UserRootsTracingWhereInput)
    where?: UserRootsTracingWhereInput;

    @Field(() => [UserRootsTracingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserRootsTracingOrderByWithAggregationInput>;

    @Field(() => [UserRootsTracingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserRootsTracingScalarFieldEnum>;

    @Field(() => UserRootsTracingScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserRootsTracingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserRootsTracingCountAggregateInput, {nullable:true})
    _count?: UserRootsTracingCountAggregateInput;

    @Field(() => UserRootsTracingAvgAggregateInput, {nullable:true})
    _avg?: UserRootsTracingAvgAggregateInput;

    @Field(() => UserRootsTracingSumAggregateInput, {nullable:true})
    _sum?: UserRootsTracingSumAggregateInput;

    @Field(() => UserRootsTracingMinAggregateInput, {nullable:true})
    _min?: UserRootsTracingMinAggregateInput;

    @Field(() => UserRootsTracingMaxAggregateInput, {nullable:true})
    _max?: UserRootsTracingMaxAggregateInput;
}
