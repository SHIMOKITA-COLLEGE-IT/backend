import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationCreateManyInput } from './generation-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGenerationArgs {

    @Field(() => [GenerationCreateManyInput], {nullable:false})
    @Type(() => GenerationCreateManyInput)
    data!: Array<GenerationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
