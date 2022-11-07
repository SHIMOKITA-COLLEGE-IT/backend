import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsWhereInput } from './roots-where.input';
import { Type } from 'class-transformer';
import { RootsOrderByWithRelationInput } from './roots-order-by-with-relation.input';
import { RootsWhereUniqueInput } from './roots-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RootsCountAggregateInput } from './roots-count-aggregate.input';
import { RootsAvgAggregateInput } from './roots-avg-aggregate.input';
import { RootsSumAggregateInput } from './roots-sum-aggregate.input';
import { RootsMinAggregateInput } from './roots-min-aggregate.input';
import { RootsMaxAggregateInput } from './roots-max-aggregate.input';

@ArgsType()
export class RootsAggregateArgs {

    @Field(() => RootsWhereInput, {nullable:true})
    @Type(() => RootsWhereInput)
    where?: RootsWhereInput;

    @Field(() => [RootsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RootsOrderByWithRelationInput>;

    @Field(() => RootsWhereUniqueInput, {nullable:true})
    cursor?: RootsWhereUniqueInput;

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
