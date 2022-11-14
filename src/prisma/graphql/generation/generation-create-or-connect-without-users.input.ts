import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationCreateWithoutUsersInput } from './generation-create-without-users.input';

@InputType()
export class GenerationCreateOrConnectWithoutUsersInput {

    @Field(() => GenerationWhereUniqueInput, {nullable:false})
    @Type(() => GenerationWhereUniqueInput)
    where!: GenerationWhereUniqueInput;

    @Field(() => GenerationCreateWithoutUsersInput, {nullable:false})
    @Type(() => GenerationCreateWithoutUsersInput)
    create!: GenerationCreateWithoutUsersInput;
}
