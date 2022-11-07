import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsWhereInput } from './my-roots-where.input';

@InputType()
export class MyRootsRelationFilter {

    @Field(() => MyRootsWhereInput, {nullable:true})
    is?: MyRootsWhereInput;

    @Field(() => MyRootsWhereInput, {nullable:true})
    isNot?: MyRootsWhereInput;
}
