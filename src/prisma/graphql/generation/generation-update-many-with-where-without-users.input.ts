import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationScalarWhereInput } from './generation-scalar-where.input';
import { Type } from 'class-transformer';
import { GenerationUpdateManyMutationInput } from './generation-update-many-mutation.input';

@InputType()
export class GenerationUpdateManyWithWhereWithoutUsersInput {

    @Field(() => GenerationScalarWhereInput, {nullable:false})
    @Type(() => GenerationScalarWhereInput)
    where!: GenerationScalarWhereInput;

    @Field(() => GenerationUpdateManyMutationInput, {nullable:false})
    @Type(() => GenerationUpdateManyMutationInput)
    data!: GenerationUpdateManyMutationInput;
}
