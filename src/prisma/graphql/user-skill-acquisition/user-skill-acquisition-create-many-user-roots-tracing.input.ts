import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserSkillAcquisitionCreateManyUserRootsTracingInput {

    @Field(() => Int, {nullable:false})
    skillId!: number;
}
