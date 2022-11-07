import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereInput } from './shimokita-college-profile-where.input';

@InputType()
export class ShimokitaCollegeProfileListRelationFilter {

    @Field(() => ShimokitaCollegeProfileWhereInput, {nullable:true})
    every?: ShimokitaCollegeProfileWhereInput;

    @Field(() => ShimokitaCollegeProfileWhereInput, {nullable:true})
    some?: ShimokitaCollegeProfileWhereInput;

    @Field(() => ShimokitaCollegeProfileWhereInput, {nullable:true})
    none?: ShimokitaCollegeProfileWhereInput;
}
