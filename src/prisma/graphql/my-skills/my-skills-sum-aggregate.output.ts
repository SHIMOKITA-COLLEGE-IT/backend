import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MySkillsSumAggregate {

    @Field(() => Int, {nullable:true})
    profileId?: number;

    @Field(() => Int, {nullable:true})
    skillId?: number;

    @Field(() => Int, {nullable:true})
    myRootsId?: number;
}
