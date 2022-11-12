import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRootsInput } from './user-create-without-roots.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRootsInput } from './user-create-or-connect-without-roots.input';
import { UserUpsertWithoutRootsInput } from './user-upsert-without-roots.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRootsInput } from './user-update-without-roots.input';

@InputType()
export class UserUpdateOneRequiredWithoutRootsNestedInput {

    @Field(() => UserCreateWithoutRootsInput, {nullable:true})
    @Type(() => UserCreateWithoutRootsInput)
    create?: UserCreateWithoutRootsInput;

    @Field(() => UserCreateOrConnectWithoutRootsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRootsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRootsInput;

    @Field(() => UserUpsertWithoutRootsInput, {nullable:true})
    @Type(() => UserUpsertWithoutRootsInput)
    upsert?: UserUpsertWithoutRootsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRootsInput, {nullable:true})
    @Type(() => UserUpdateWithoutRootsInput)
    update?: UserUpdateWithoutRootsInput;
}
