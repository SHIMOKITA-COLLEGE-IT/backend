import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRootsInput } from './user-create-without-roots.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRootsInput } from './user-create-or-connect-without-roots.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRootsInput {

    @Field(() => UserCreateWithoutRootsInput, {nullable:true})
    @Type(() => UserCreateWithoutRootsInput)
    create?: UserCreateWithoutRootsInput;

    @Field(() => UserCreateOrConnectWithoutRootsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRootsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRootsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
