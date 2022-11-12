import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutUsersInput } from './tag-update-without-users.input';
import { TagCreateWithoutUsersInput } from './tag-create-without-users.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutUsersInput, {nullable:false})
    @Type(() => TagUpdateWithoutUsersInput)
    update!: TagUpdateWithoutUsersInput;

    @Field(() => TagCreateWithoutUsersInput, {nullable:false})
    @Type(() => TagCreateWithoutUsersInput)
    create!: TagCreateWithoutUsersInput;
}
