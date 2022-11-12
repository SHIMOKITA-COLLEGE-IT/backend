import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserSkillAcquisitionMinAggregate {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Int, {nullable:true})
    skillId?: number;

    @Field(() => Int, {nullable:true})
    rootsId?: number;
}
