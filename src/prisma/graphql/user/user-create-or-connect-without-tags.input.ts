import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTagsInput } from './user-create-without-tags.input';

@InputType()
export class UserCreateOrConnectWithoutTagsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTagsInput, {nullable:false})
    @Type(() => UserCreateWithoutTagsInput)
    create!: UserCreateWithoutTagsInput;
}
