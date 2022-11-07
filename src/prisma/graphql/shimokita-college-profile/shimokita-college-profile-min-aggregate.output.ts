import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShimokitaCollegeProfileMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    profileId?: number;

    @Field(() => Boolean, {nullable:true})
    isAlumni?: boolean;

    @Field(() => String, {nullable:true})
    slackEmail?: string;

    @Field(() => Int, {nullable:true})
    roomNumber?: number;

    @Field(() => Int, {nullable:true})
    postNumber?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
