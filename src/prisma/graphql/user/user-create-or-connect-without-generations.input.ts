import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGenerationsInput } from './user-create-without-generations.input';

@InputType()
export class UserCreateOrConnectWithoutGenerationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => UserCreateWithoutGenerationsInput)
    create!: UserCreateWithoutGenerationsInput;
}
