import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class ShimokitaCollegeProfileWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    profileId?: number;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    slackEmail?: string;
}
