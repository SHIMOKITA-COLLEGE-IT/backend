import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsWhereInput } from './my-skills-where.input';
import { Type } from 'class-transformer';
import { MySkillsOrderByWithAggregationInput } from './my-skills-order-by-with-aggregation.input';
import { MySkillsScalarFieldEnum } from './my-skills-scalar-field.enum';
import { MySkillsScalarWhereWithAggregatesInput } from './my-skills-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MySkillsCountAggregateInput } from './my-skills-count-aggregate.input';
import { MySkillsAvgAggregateInput } from './my-skills-avg-aggregate.input';
import { MySkillsSumAggregateInput } from './my-skills-sum-aggregate.input';
import { MySkillsMinAggregateInput } from './my-skills-min-aggregate.input';
import { MySkillsMaxAggregateInput } from './my-skills-max-aggregate.input';

@ArgsType()
export class MySkillsGroupByArgs {

    @Field(() => MySkillsWhereInput, {nullable:true})
    @Type(() => MySkillsWhereInput)
    where?: MySkillsWhereInput;

    @Field(() => [MySkillsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MySkillsOrderByWithAggregationInput>;

    @Field(() => [MySkillsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MySkillsScalarFieldEnum>;

    @Field(() => MySkillsScalarWhereWithAggregatesInput, {nullable:true})
    having?: MySkillsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MySkillsCountAggregateInput, {nullable:true})
    _count?: MySkillsCountAggregateInput;

    @Field(() => MySkillsAvgAggregateInput, {nullable:true})
    _avg?: MySkillsAvgAggregateInput;

    @Field(() => MySkillsSumAggregateInput, {nullable:true})
    _sum?: MySkillsSumAggregateInput;

    @Field(() => MySkillsMinAggregateInput, {nullable:true})
    _min?: MySkillsMinAggregateInput;

    @Field(() => MySkillsMaxAggregateInput, {nullable:true})
    _max?: MySkillsMaxAggregateInput;
}
