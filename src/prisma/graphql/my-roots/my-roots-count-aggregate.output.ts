import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MyRootsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    rootsId!: number;

    @Field(() => Int, {nullable:false})
    from!: number;

    @Field(() => Int, {nullable:false})
    to!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
