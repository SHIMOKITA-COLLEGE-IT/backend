import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoWhereInput } from './co-co-where.input';

@InputType()
export class CoCoListRelationFilter {

    @Field(() => CoCoWhereInput, {nullable:true})
    every?: CoCoWhereInput;

    @Field(() => CoCoWhereInput, {nullable:true})
    some?: CoCoWhereInput;

    @Field(() => CoCoWhereInput, {nullable:true})
    none?: CoCoWhereInput;
}
