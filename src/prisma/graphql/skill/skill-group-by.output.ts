import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SkillCountAggregate } from './skill-count-aggregate.output';
import { SkillAvgAggregate } from './skill-avg-aggregate.output';
import { SkillSumAggregate } from './skill-sum-aggregate.output';
import { SkillMinAggregate } from './skill-min-aggregate.output';
import { SkillMaxAggregate } from './skill-max-aggregate.output';

@ObjectType()
export class SkillGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => SkillCountAggregate, {nullable:true})
    _count?: SkillCountAggregate;

    @Field(() => SkillAvgAggregate, {nullable:true})
    _avg?: SkillAvgAggregate;

    @Field(() => SkillSumAggregate, {nullable:true})
    _sum?: SkillSumAggregate;

    @Field(() => SkillMinAggregate, {nullable:true})
    _min?: SkillMinAggregate;

    @Field(() => SkillMaxAggregate, {nullable:true})
    _max?: SkillMaxAggregate;
}
