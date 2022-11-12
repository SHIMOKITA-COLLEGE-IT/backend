import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserSkillAcquisitionCreateManyUserInput {

    @Field(() => Int, {nullable:false})
    skillId!: number;

    @Field(() => Int, {nullable:true})
    rootsId?: number;
}
