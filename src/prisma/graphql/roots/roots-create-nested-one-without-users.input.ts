import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsCreateWithoutUsersInput } from './roots-create-without-users.input';
import { Type } from 'class-transformer';
import { RootsCreateOrConnectWithoutUsersInput } from './roots-create-or-connect-without-users.input';
import { RootsWhereUniqueInput } from './roots-where-unique.input';

@InputType()
export class RootsCreateNestedOneWithoutUsersInput {

    @Field(() => RootsCreateWithoutUsersInput, {nullable:true})
    @Type(() => RootsCreateWithoutUsersInput)
    create?: RootsCreateWithoutUsersInput;

    @Field(() => RootsCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => RootsCreateOrConnectWithoutUsersInput)
    connectOrCreate?: RootsCreateOrConnectWithoutUsersInput;

    @Field(() => RootsWhereUniqueInput, {nullable:true})
    @Type(() => RootsWhereUniqueInput)
    connect?: RootsWhereUniqueInput;
}
