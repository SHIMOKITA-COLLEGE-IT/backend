import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsWhereUniqueInput } from './roots-where-unique.input';
import { Type } from 'class-transformer';
import { RootsCreateWithoutUsersInput } from './roots-create-without-users.input';

@InputType()
export class RootsCreateOrConnectWithoutUsersInput {

    @Field(() => RootsWhereUniqueInput, {nullable:false})
    @Type(() => RootsWhereUniqueInput)
    where!: RootsWhereUniqueInput;

    @Field(() => RootsCreateWithoutUsersInput, {nullable:false})
    @Type(() => RootsCreateWithoutUsersInput)
    create!: RootsCreateWithoutUsersInput;
}
