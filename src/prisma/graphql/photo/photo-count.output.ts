import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PhotoCount {

    @Field(() => Int, {nullable:false})
    profiles?: number;

    @Field(() => Int, {nullable:false})
    houses?: number;

    @Field(() => Int, {nullable:false})
    homes?: number;

    @Field(() => Int, {nullable:false})
    committee?: number;

    @Field(() => Int, {nullable:false})
    clubs?: number;
}
