import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationWhereInput } from './generation-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGenerationArgs {

    @Field(() => GenerationWhereInput, {nullable:true})
    @Type(() => GenerationWhereInput)
    where?: GenerationWhereInput;
}
