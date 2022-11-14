import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGenerationArgs {

    @Field(() => GenerationWhereUniqueInput, {nullable:false})
    @Type(() => GenerationWhereUniqueInput)
    where!: GenerationWhereUniqueInput;
}
