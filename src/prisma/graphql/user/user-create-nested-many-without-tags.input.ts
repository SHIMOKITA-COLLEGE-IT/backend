import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTagsInput } from './user-create-without-tags.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTagsInput } from './user-create-or-connect-without-tags.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutTagsInput {

    @Field(() => [UserCreateWithoutTagsInput], {nullable:true})
    @Type(() => UserCreateWithoutTagsInput)
    create?: Array<UserCreateWithoutTagsInput>;

    @Field(() => [UserCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutTagsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
