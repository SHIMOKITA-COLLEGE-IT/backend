import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsUpdateWithoutUsersInput } from './roots-update-without-users.input';
import { Type } from 'class-transformer';
import { RootsCreateWithoutUsersInput } from './roots-create-without-users.input';

@InputType()
export class RootsUpsertWithoutUsersInput {

    @Field(() => RootsUpdateWithoutUsersInput, {nullable:false})
    @Type(() => RootsUpdateWithoutUsersInput)
    update!: RootsUpdateWithoutUsersInput;

    @Field(() => RootsCreateWithoutUsersInput, {nullable:false})
    @Type(() => RootsCreateWithoutUsersInput)
    create!: RootsCreateWithoutUsersInput;
}
