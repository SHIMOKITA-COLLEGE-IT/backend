import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    socialLinks?: number;

    @Field(() => Int, {nullable:false})
    groups?: number;

    @Field(() => Int, {nullable:false})
    roots?: number;

    @Field(() => Int, {nullable:false})
    skills?: number;

    @Field(() => Int, {nullable:false})
    tags?: number;
}
