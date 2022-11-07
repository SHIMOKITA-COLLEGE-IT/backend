import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsWhereInput } from './my-roots-where.input';

@InputType()
export class MyRootsListRelationFilter {

    @Field(() => MyRootsWhereInput, {nullable:true})
    every?: MyRootsWhereInput;

    @Field(() => MyRootsWhereInput, {nullable:true})
    some?: MyRootsWhereInput;

    @Field(() => MyRootsWhereInput, {nullable:true})
    none?: MyRootsWhereInput;
}
