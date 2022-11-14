import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationGenerationTypeNameFromToCompoundUniqueInput } from './generation-generation-type-name-from-to-compound-unique.input';

@InputType()
export class GenerationWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => GenerationGenerationTypeNameFromToCompoundUniqueInput, {nullable:true})
    generationType_name_from_to?: GenerationGenerationTypeNameFromToCompoundUniqueInput;
}
