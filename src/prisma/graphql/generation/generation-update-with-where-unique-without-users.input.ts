import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationUpdateWithoutUsersInput } from './generation-update-without-users.input';

@InputType()
export class GenerationUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => GenerationWhereUniqueInput, {nullable:false})
    @Type(() => GenerationWhereUniqueInput)
    where!: GenerationWhereUniqueInput;

    @Field(() => GenerationUpdateWithoutUsersInput, {nullable:false})
    @Type(() => GenerationUpdateWithoutUsersInput)
    data!: GenerationUpdateWithoutUsersInput;
}
