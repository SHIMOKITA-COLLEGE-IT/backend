import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoCoWhereInput } from './co-co-where.input';
import { Type } from 'class-transformer';
import { CoCoOrderByWithRelationInput } from './co-co-order-by-with-relation.input';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CoCoCountAggregateInput } from './co-co-count-aggregate.input';
import { CoCoAvgAggregateInput } from './co-co-avg-aggregate.input';
import { CoCoSumAggregateInput } from './co-co-sum-aggregate.input';
import { CoCoMinAggregateInput } from './co-co-min-aggregate.input';
import { CoCoMaxAggregateInput } from './co-co-max-aggregate.input';

@ArgsType()
export class CoCoAggregateArgs {

    @Field(() => CoCoWhereInput, {nullable:true})
    @Type(() => CoCoWhereInput)
    where?: CoCoWhereInput;

    @Field(() => [CoCoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CoCoOrderByWithRelationInput>;

    @Field(() => CoCoWhereUniqueInput, {nullable:true})
    cursor?: CoCoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CoCoCountAggregateInput, {nullable:true})
    _count?: CoCoCountAggregateInput;

    @Field(() => CoCoAvgAggregateInput, {nullable:true})
    _avg?: CoCoAvgAggregateInput;

    @Field(() => CoCoSumAggregateInput, {nullable:true})
    _sum?: CoCoSumAggregateInput;

    @Field(() => CoCoMinAggregateInput, {nullable:true})
    _min?: CoCoMinAggregateInput;

    @Field(() => CoCoMaxAggregateInput, {nullable:true})
    _max?: CoCoMaxAggregateInput;
}
