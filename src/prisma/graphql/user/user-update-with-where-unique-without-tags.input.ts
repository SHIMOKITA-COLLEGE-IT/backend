import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutTagsInput } from './user-update-without-tags.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutTagsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTagsInput, {nullable:false})
    @Type(() => UserUpdateWithoutTagsInput)
    data!: UserUpdateWithoutTagsInput;
}
