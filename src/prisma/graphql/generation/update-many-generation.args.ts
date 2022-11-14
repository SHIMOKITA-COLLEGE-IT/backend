import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationUpdateManyMutationInput } from './generation-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GenerationWhereInput } from './generation-where.input';

@ArgsType()
export class UpdateManyGenerationArgs {

    @Field(() => GenerationUpdateManyMutationInput, {nullable:false})
    @Type(() => GenerationUpdateManyMutationInput)
    data!: GenerationUpdateManyMutationInput;

    @Field(() => GenerationWhereInput, {nullable:true})
    @Type(() => GenerationWhereInput)
    where?: GenerationWhereInput;
}
