import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRootsInput } from './user-update-without-roots.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRootsInput } from './user-create-without-roots.input';

@InputType()
export class UserUpsertWithoutRootsInput {

    @Field(() => UserUpdateWithoutRootsInput, {nullable:false})
    @Type(() => UserUpdateWithoutRootsInput)
    update!: UserUpdateWithoutRootsInput;

    @Field(() => UserCreateWithoutRootsInput, {nullable:false})
    @Type(() => UserCreateWithoutRootsInput)
    create!: UserCreateWithoutRootsInput;
}
