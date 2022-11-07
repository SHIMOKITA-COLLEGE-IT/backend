import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MySkillsCreateManySkillInput {

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:true})
    myRootsId?: number;
}
