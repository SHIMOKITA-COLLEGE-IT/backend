import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    nickName?: string;

    @Field(() => Boolean, {nullable:true})
    showOnlyNickname?: boolean;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => Boolean, {nullable:true})
    hideAge?: boolean;

    @Field(() => String, {nullable:true})
    position?: string;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
