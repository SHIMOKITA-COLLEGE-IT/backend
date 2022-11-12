import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutUsersInput } from './tag-create-without-users.input';

@InputType()
export class TagCreateOrConnectWithoutUsersInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: TagWhereUniqueInput;

    @Field(() => TagCreateWithoutUsersInput, {nullable:false})
    @Type(() => TagCreateWithoutUsersInput)
    create!: TagCreateWithoutUsersInput;
}
