import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsCreateWithoutUsersInput } from './roots-create-without-users.input';
import { Type } from 'class-transformer';
import { RootsCreateOrConnectWithoutUsersInput } from './roots-create-or-connect-without-users.input';
import { RootsUpsertWithoutUsersInput } from './roots-upsert-without-users.input';
import { RootsWhereUniqueInput } from './roots-where-unique.input';
import { RootsUpdateWithoutUsersInput } from './roots-update-without-users.input';

@InputType()
export class RootsUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => RootsCreateWithoutUsersInput, {nullable:true})
    @Type(() => RootsCreateWithoutUsersInput)
    create?: RootsCreateWithoutUsersInput;

    @Field(() => RootsCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => RootsCreateOrConnectWithoutUsersInput)
    connectOrCreate?: RootsCreateOrConnectWithoutUsersInput;

    @Field(() => RootsUpsertWithoutUsersInput, {nullable:true})
    @Type(() => RootsUpsertWithoutUsersInput)
    upsert?: RootsUpsertWithoutUsersInput;

    @Field(() => RootsWhereUniqueInput, {nullable:true})
    @Type(() => RootsWhereUniqueInput)
    connect?: RootsWhereUniqueInput;

    @Field(() => RootsUpdateWithoutUsersInput, {nullable:true})
    @Type(() => RootsUpdateWithoutUsersInput)
    update?: RootsUpdateWithoutUsersInput;
}
