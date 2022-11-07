import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HouseCount {

    @Field(() => Int, {nullable:false})
    photos?: number;

    @Field(() => Int, {nullable:false})
    shimokitaCollegeProfiles?: number;
}
