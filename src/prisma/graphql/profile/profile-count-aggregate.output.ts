import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    nickName!: number;

    @Field(() => Int, {nullable:false})
    showOnlyNickname!: number;

    @Field(() => Int, {nullable:false})
    birthday!: number;

    @Field(() => Int, {nullable:false})
    hideAge!: number;

    @Field(() => Int, {nullable:false})
    position!: number;

    @Field(() => Int, {nullable:false})
    bio!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
