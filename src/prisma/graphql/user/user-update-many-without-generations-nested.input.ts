import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGenerationsInput } from './user-create-without-generations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGenerationsInput } from './user-create-or-connect-without-generations.input';
import { UserUpsertWithWhereUniqueWithoutGenerationsInput } from './user-upsert-with-where-unique-without-generations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutGenerationsInput } from './user-update-with-where-unique-without-generations.input';
import { UserUpdateManyWithWhereWithoutGenerationsInput } from './user-update-many-with-where-without-generations.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutGenerationsNestedInput {

    @Field(() => [UserCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => UserCreateWithoutGenerationsInput)
    create?: Array<UserCreateWithoutGenerationsInput>;

    @Field(() => [UserCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutGenerationsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutGenerationsInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
