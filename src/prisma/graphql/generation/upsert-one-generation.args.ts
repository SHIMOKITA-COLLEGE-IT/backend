import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationCreateInput } from './generation-create.input';
import { GenerationUpdateInput } from './generation-update.input';

@ArgsType()
export class UpsertOneGenerationArgs {

    @Field(() => GenerationWhereUniqueInput, {nullable:false})
    @Type(() => GenerationWhereUniqueInput)
    where!: GenerationWhereUniqueInput;

    @Field(() => GenerationCreateInput, {nullable:false})
    @Type(() => GenerationCreateInput)
    create!: GenerationCreateInput;

    @Field(() => GenerationUpdateInput, {nullable:false})
    @Type(() => GenerationUpdateInput)
    update!: GenerationUpdateInput;
}
