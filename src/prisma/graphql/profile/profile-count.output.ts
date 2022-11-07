import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileCount {

    @Field(() => Int, {nullable:false})
    socialLinks?: number;

    @Field(() => Int, {nullable:false})
    myRoots?: number;

    @Field(() => Int, {nullable:false})
    mySkills?: number;

    @Field(() => Int, {nullable:false})
    tags?: number;

    @Field(() => Int, {nullable:false})
    photos?: number;
}
