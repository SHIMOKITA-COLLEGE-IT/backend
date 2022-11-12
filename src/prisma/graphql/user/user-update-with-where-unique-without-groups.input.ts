import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutGroupsInput } from './user-update-without-groups.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutGroupsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGroupsInput, {nullable:false})
    @Type(() => UserUpdateWithoutGroupsInput)
    data!: UserUpdateWithoutGroupsInput;
}
