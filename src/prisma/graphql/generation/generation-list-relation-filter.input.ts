import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationWhereInput } from './generation-where.input';

@InputType()
export class GenerationListRelationFilter {

    @Field(() => GenerationWhereInput, {nullable:true})
    every?: GenerationWhereInput;

    @Field(() => GenerationWhereInput, {nullable:true})
    some?: GenerationWhereInput;

    @Field(() => GenerationWhereInput, {nullable:true})
    none?: GenerationWhereInput;
}
