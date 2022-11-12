import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGroupsInput } from './user-create-without-groups.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGroupsInput } from './user-create-or-connect-without-groups.input';
import { UserUpsertWithWhereUniqueWithoutGroupsInput } from './user-upsert-with-where-unique-without-groups.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutGroupsInput } from './user-update-with-where-unique-without-groups.input';
import { UserUpdateManyWithWhereWithoutGroupsInput } from './user-update-many-with-where-without-groups.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutGroupsNestedInput {

    @Field(() => [UserCreateWithoutGroupsInput], {nullable:true})
    @Type(() => UserCreateWithoutGroupsInput)
    create?: Array<UserCreateWithoutGroupsInput>;

    @Field(() => [UserCreateOrConnectWithoutGroupsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutGroupsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutGroupsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutGroupsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutGroupsInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutGroupsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutGroupsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutGroupsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutGroupsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutGroupsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutGroupsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
