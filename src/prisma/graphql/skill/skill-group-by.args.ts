import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SkillWhereInput } from './skill-where.input';
import { Type } from 'class-transformer';
import { SkillOrderByWithAggregationInput } from './skill-order-by-with-aggregation.input';
import { SkillScalarFieldEnum } from './skill-scalar-field.enum';
import { SkillScalarWhereWithAggregatesInput } from './skill-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SkillCountAggregateInput } from './skill-count-aggregate.input';
import { SkillAvgAggregateInput } from './skill-avg-aggregate.input';
import { SkillSumAggregateInput } from './skill-sum-aggregate.input';
import { SkillMinAggregateInput } from './skill-min-aggregate.input';
import { SkillMaxAggregateInput } from './skill-max-aggregate.input';

@ArgsType()
export class SkillGroupByArgs {

    @Field(() => SkillWhereInput, {nullable:true})
    @Type(() => SkillWhereInput)
    where?: SkillWhereInput;

    @Field(() => [SkillOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SkillOrderByWithAggregationInput>;

    @Field(() => [SkillScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SkillScalarFieldEnum>;

    @Field(() => SkillScalarWhereWithAggregatesInput, {nullable:true})
    having?: SkillScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SkillCountAggregateInput, {nullable:true})
    _count?: SkillCountAggregateInput;

    @Field(() => SkillAvgAggregateInput, {nullable:true})
    _avg?: SkillAvgAggregateInput;

    @Field(() => SkillSumAggregateInput, {nullable:true})
    _sum?: SkillSumAggregateInput;

    @Field(() => SkillMinAggregateInput, {nullable:true})
    _min?: SkillMinAggregateInput;

    @Field(() => SkillMaxAggregateInput, {nullable:true})
    _max?: SkillMaxAggregateInput;
}
