import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeWhereInput } from './home-where.input';
import { Type } from 'class-transformer';
import { HomeOrderByWithRelationInput } from './home-order-by-with-relation.input';
import { HomeWhereUniqueInput } from './home-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeCountAggregateInput } from './home-count-aggregate.input';
import { HomeAvgAggregateInput } from './home-avg-aggregate.input';
import { HomeSumAggregateInput } from './home-sum-aggregate.input';
import { HomeMinAggregateInput } from './home-min-aggregate.input';
import { HomeMaxAggregateInput } from './home-max-aggregate.input';

@ArgsType()
export class HomeAggregateArgs {

    @Field(() => HomeWhereInput, {nullable:true})
    @Type(() => HomeWhereInput)
    where?: HomeWhereInput;

    @Field(() => [HomeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOrderByWithRelationInput>;

    @Field(() => HomeWhereUniqueInput, {nullable:true})
    cursor?: HomeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HomeCountAggregateInput, {nullable:true})
    _count?: HomeCountAggregateInput;

    @Field(() => HomeAvgAggregateInput, {nullable:true})
    _avg?: HomeAvgAggregateInput;

    @Field(() => HomeSumAggregateInput, {nullable:true})
    _sum?: HomeSumAggregateInput;

    @Field(() => HomeMinAggregateInput, {nullable:true})
    _min?: HomeMinAggregateInput;

    @Field(() => HomeMaxAggregateInput, {nullable:true})
    _max?: HomeMaxAggregateInput;
}
