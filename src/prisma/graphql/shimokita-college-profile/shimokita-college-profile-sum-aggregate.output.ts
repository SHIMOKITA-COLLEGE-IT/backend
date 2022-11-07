import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShimokitaCollegeProfileSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    profileId?: number;

    @Field(() => Int, {nullable:true})
    roomNumber?: number;

    @Field(() => Int, {nullable:true})
    postNumber?: number;
}
