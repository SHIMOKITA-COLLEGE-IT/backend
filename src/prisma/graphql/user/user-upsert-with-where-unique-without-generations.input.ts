import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutGenerationsInput } from './user-update-without-generations.input';
import { UserCreateWithoutGenerationsInput } from './user-create-without-generations.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutGenerationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutGenerationsInput)
    update!: UserUpdateWithoutGenerationsInput;

    @Field(() => UserCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => UserCreateWithoutGenerationsInput)
    create!: UserCreateWithoutGenerationsInput;
}
