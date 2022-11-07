import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MySkillsCountAggregate } from './my-skills-count-aggregate.output';
import { MySkillsAvgAggregate } from './my-skills-avg-aggregate.output';
import { MySkillsSumAggregate } from './my-skills-sum-aggregate.output';
import { MySkillsMinAggregate } from './my-skills-min-aggregate.output';
import { MySkillsMaxAggregate } from './my-skills-max-aggregate.output';

@ObjectType()
export class MySkillsGroupBy {

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    skillId!: number;

    @Field(() => Int, {nullable:true})
    myRootsId?: number;

    @Field(() => MySkillsCountAggregate, {nullable:true})
    _count?: MySkillsCountAggregate;

    @Field(() => MySkillsAvgAggregate, {nullable:true})
    _avg?: MySkillsAvgAggregate;

    @Field(() => MySkillsSumAggregate, {nullable:true})
    _sum?: MySkillsSumAggregate;

    @Field(() => MySkillsMinAggregate, {nullable:true})
    _min?: MySkillsMinAggregate;

    @Field(() => MySkillsMaxAggregate, {nullable:true})
    _max?: MySkillsMaxAggregate;
}
