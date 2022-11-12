import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutUsersInput } from './tag-update-without-users.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutUsersInput, {nullable:false})
    @Type(() => TagUpdateWithoutUsersInput)
    data!: TagUpdateWithoutUsersInput;
}
