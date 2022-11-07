import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MySkillsCountAggregate {

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    skillId!: number;

    @Field(() => Int, {nullable:false})
    myRootsId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
