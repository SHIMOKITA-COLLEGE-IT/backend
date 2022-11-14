import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationUpdateInput } from './generation-update.input';
import { Type } from 'class-transformer';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';

@ArgsType()
export class UpdateOneGenerationArgs {

    @Field(() => GenerationUpdateInput, {nullable:false})
    @Type(() => GenerationUpdateInput)
    data!: GenerationUpdateInput;

    @Field(() => GenerationWhereUniqueInput, {nullable:false})
    @Type(() => GenerationWhereUniqueInput)
    where!: GenerationWhereUniqueInput;
}
