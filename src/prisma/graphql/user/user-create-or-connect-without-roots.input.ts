import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRootsInput } from './user-create-without-roots.input';

@InputType()
export class UserCreateOrConnectWithoutRootsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRootsInput, {nullable:false})
    @Type(() => UserCreateWithoutRootsInput)
    create!: UserCreateWithoutRootsInput;
}
