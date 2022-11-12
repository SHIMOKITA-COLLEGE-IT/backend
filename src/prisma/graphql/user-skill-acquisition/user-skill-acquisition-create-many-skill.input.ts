import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserSkillAcquisitionCreateManySkillInput {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Int, {nullable:true})
    rootsId?: number;
}
