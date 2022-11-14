import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGenerationArgs {

    @Field(() => GenerationWhereUniqueInput, {nullable:false})
    @Type(() => GenerationWhereUniqueInput)
    where!: GenerationWhereUniqueInput;
}
