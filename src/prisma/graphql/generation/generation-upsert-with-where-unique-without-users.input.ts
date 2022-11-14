import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationUpdateWithoutUsersInput } from './generation-update-without-users.input';
import { GenerationCreateWithoutUsersInput } from './generation-create-without-users.input';

@InputType()
export class GenerationUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => GenerationWhereUniqueInput, {nullable:false})
    @Type(() => GenerationWhereUniqueInput)
    where!: GenerationWhereUniqueInput;

    @Field(() => GenerationUpdateWithoutUsersInput, {nullable:false})
    @Type(() => GenerationUpdateWithoutUsersInput)
    update!: GenerationUpdateWithoutUsersInput;

    @Field(() => GenerationCreateWithoutUsersInput, {nullable:false})
    @Type(() => GenerationCreateWithoutUsersInput)
    create!: GenerationCreateWithoutUsersInput;
}
