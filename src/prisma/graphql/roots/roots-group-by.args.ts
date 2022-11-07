import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsWhereInput } from './roots-where.input';
import { Type } from 'class-transformer';
import { RootsOrderByWithAggregationInput } from './roots-order-by-with-aggregation.input';
import { RootsScalarFieldEnum } from './roots-scalar-field.enum';
import { RootsScalarWhereWithAggregatesInput } from './roots-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RootsCountAggregateInput } from './roots-count-aggregate.input';
import { RootsAvgAggregateInput } from './roots-avg-aggregate.input';
import { RootsSumAggregateInput } from './roots-sum-aggregate.input';
import { RootsMinAggregateInput } from './roots-min-aggregate.input';
import { RootsMaxAggregateInput } from './roots-max-aggregate.input';

@ArgsType()
export class RootsGroupByArgs {

    @Field(() => RootsWhereInput, {nullable:true})
    @Type(() => RootsWhereInput)
    where?: RootsWhereInput;

    @Field(() => [RootsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RootsOrderByWithAggregationInput>;

    @Field(() => [RootsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RootsScalarFieldEnum>;

    @Field(() => RootsScalarWhereWithAggregatesInput, {nullable:true})
    having?: RootsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RootsCountAggregateInput, {nullable:true})
    _count?: RootsCountAggregateInput;

    @Field(() => RootsAvgAggregateInput, {nullable:true})
    _avg?: RootsAvgAggregateInput;

    @Field(() => RootsSumAggregateInput, {nullable:true})
    _sum?: RootsSumAggregateInput;

    @Field(() => RootsMinAggregateInput, {nullable:true})
    _min?: RootsMinAggregateInput;

    @Field(() => RootsMaxAggregateInput, {nullable:true})
    _max?: RootsMaxAggregateInput;
}
