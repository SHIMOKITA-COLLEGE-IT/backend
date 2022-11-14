import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RootsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    rootsType!: number;

    @Field(() => Int, {nullable:false})
    googleMapUrl!: number;

    @Field(() => Int, {nullable:false})
    introductionUrl!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
