import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsWhereInput } from './my-skills-where.input';
import { Type } from 'class-transformer';
import { MySkillsOrderByWithRelationInput } from './my-skills-order-by-with-relation.input';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MySkillsCountAggregateInput } from './my-skills-count-aggregate.input';
import { MySkillsAvgAggregateInput } from './my-skills-avg-aggregate.input';
import { MySkillsSumAggregateInput } from './my-skills-sum-aggregate.input';
import { MySkillsMinAggregateInput } from './my-skills-min-aggregate.input';
import { MySkillsMaxAggregateInput } from './my-skills-max-aggregate.input';

@ArgsType()
export class MySkillsAggregateArgs {

    @Field(() => MySkillsWhereInput, {nullable:true})
    @Type(() => MySkillsWhereInput)
    where?: MySkillsWhereInput;

    @Field(() => [MySkillsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MySkillsOrderByWithRelationInput>;

    @Field(() => MySkillsWhereUniqueInput, {nullable:true})
    cursor?: MySkillsWhereUniqueInput;

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
