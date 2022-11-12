import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTagsInput } from './user-create-without-tags.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTagsInput } from './user-create-or-connect-without-tags.input';
import { UserUpsertWithWhereUniqueWithoutTagsInput } from './user-upsert-with-where-unique-without-tags.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutTagsInput } from './user-update-with-where-unique-without-tags.input';
import { UserUpdateManyWithWhereWithoutTagsInput } from './user-update-many-with-where-without-tags.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutTagsNestedInput {

    @Field(() => [UserCreateWithoutTagsInput], {nullable:true})
    @Type(() => UserCreateWithoutTagsInput)
    create?: Array<UserCreateWithoutTagsInput>;

    @Field(() => [UserCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutTagsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutTagsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
