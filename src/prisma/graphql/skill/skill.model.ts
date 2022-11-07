import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MySkills } from '../my-skills/my-skills.model';
import { SkillCount } from './skill-count.output';

@ObjectType()
export class Skill {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    parentId!: number | null;

    @Field(() => Skill, {nullable:true})
    parent?: Skill | null;

    @Field(() => [Skill], {nullable:true})
    children?: Array<Skill>;

    @Field(() => [MySkills], {nullable:true})
    profiles?: Array<MySkills>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => SkillCount, {nullable:false})
    _count?: SkillCount;
}
