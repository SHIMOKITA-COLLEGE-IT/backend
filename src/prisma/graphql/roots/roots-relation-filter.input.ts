import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsWhereInput } from './roots-where.input';

@InputType()
export class RootsRelationFilter {

    @Field(() => RootsWhereInput, {nullable:true})
    is?: RootsWhereInput;

    @Field(() => RootsWhereInput, {nullable:true})
    isNot?: RootsWhereInput;
}
