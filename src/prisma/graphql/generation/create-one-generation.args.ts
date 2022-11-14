import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationCreateInput } from './generation-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGenerationArgs {

    @Field(() => GenerationCreateInput, {nullable:false})
    @Type(() => GenerationCreateInput)
    data!: GenerationCreateInput;
}
