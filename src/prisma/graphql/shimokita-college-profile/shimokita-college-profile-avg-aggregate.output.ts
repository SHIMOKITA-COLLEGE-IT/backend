import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ShimokitaCollegeProfileAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    profileId?: number;

    @Field(() => Float, {nullable:true})
    roomNumber?: number;

    @Field(() => Float, {nullable:true})
    postNumber?: number;
}
