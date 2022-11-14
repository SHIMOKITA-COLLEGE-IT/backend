import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationWhereInput } from './generation-where.input';
import { Type } from 'class-transformer';
import { GenerationOrderByWithRelationInput } from './generation-order-by-with-relation.input';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenerationCountAggregateInput } from './generation-count-aggregate.input';
import { GenerationAvgAggregateInput } from './generation-avg-aggregate.input';
import { GenerationSumAggregateInput } from './generation-sum-aggregate.input';
import { GenerationMinAggregateInput } from './generation-min-aggregate.input';
import { GenerationMaxAggregateInput } from './generation-max-aggregate.input';

@ArgsType()
export class GenerationAggregateArgs {

    @Field(() => GenerationWhereInput, {nullable:true})
    @Type(() => GenerationWhereInput)
    where?: GenerationWhereInput;

    @Field(() => [GenerationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenerationOrderByWithRelationInput>;

    @Field(() => GenerationWhereUniqueInput, {nullable:true})
    cursor?: GenerationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GenerationCountAggregateInput, {nullable:true})
    _count?: GenerationCountAggregateInput;

    @Field(() => GenerationAvgAggregateInput, {nullable:true})
    _avg?: GenerationAvgAggregateInput;

    @Field(() => GenerationSumAggregateInput, {nullable:true})
    _sum?: GenerationSumAggregateInput;

    @Field(() => GenerationMinAggregateInput, {nullable:true})
    _min?: GenerationMinAggregateInput;

    @Field(() => GenerationMaxAggregateInput, {nullable:true})
    _max?: GenerationMaxAggregateInput;
}
