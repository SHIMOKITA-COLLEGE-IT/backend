import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeWhereInput } from './home-where.input';
import { Type } from 'class-transformer';
import { HomeOrderByWithAggregationInput } from './home-order-by-with-aggregation.input';
import { HomeScalarFieldEnum } from './home-scalar-field.enum';
import { HomeScalarWhereWithAggregatesInput } from './home-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HomeCountAggregateInput } from './home-count-aggregate.input';
import { HomeAvgAggregateInput } from './home-avg-aggregate.input';
import { HomeSumAggregateInput } from './home-sum-aggregate.input';
import { HomeMinAggregateInput } from './home-min-aggregate.input';
import { HomeMaxAggregateInput } from './home-max-aggregate.input';

@ArgsType()
export class HomeGroupByArgs {

    @Field(() => HomeWhereInput, {nullable:true})
    @Type(() => HomeWhereInput)
    where?: HomeWhereInput;

    @Field(() => [HomeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeOrderByWithAggregationInput>;

    @Field(() => [HomeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeScalarFieldEnum>;

    @Field(() => HomeScalarWhereWithAggregatesInput, {nullable:true})
    having?: HomeScalarWhereWithAggregatesInput;

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
