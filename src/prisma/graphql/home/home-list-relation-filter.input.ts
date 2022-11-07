import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeWhereInput } from './home-where.input';

@InputType()
export class HomeListRelationFilter {

    @Field(() => HomeWhereInput, {nullable:true})
    every?: HomeWhereInput;

    @Field(() => HomeWhereInput, {nullable:true})
    some?: HomeWhereInput;

    @Field(() => HomeWhereInput, {nullable:true})
    none?: HomeWhereInput;
}
