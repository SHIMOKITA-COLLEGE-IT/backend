import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Skill } from '../skill/skill.model';
import { Int } from '@nestjs/graphql';
import { UserRootsTracing } from '../user-roots-tracing/user-roots-tracing.model';

@ObjectType()
export class UserSkillAcquisition {

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Skill, {nullable:false})
    skill?: Skill;

    @Field(() => Int, {nullable:false})
    skillId!: number;

    @Field(() => UserRootsTracing, {nullable:true})
    userRootsTracing?: UserRootsTracing | null;

    @Field(() => Int, {nullable:true})
    rootsId!: number | null;
}
