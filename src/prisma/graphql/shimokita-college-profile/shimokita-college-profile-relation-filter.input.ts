import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereInput } from './shimokita-college-profile-where.input';

@InputType()
export class ShimokitaCollegeProfileRelationFilter {

    @Field(() => ShimokitaCollegeProfileWhereInput, {nullable:true})
    is?: ShimokitaCollegeProfileWhereInput;

    @Field(() => ShimokitaCollegeProfileWhereInput, {nullable:true})
    isNot?: ShimokitaCollegeProfileWhereInput;
}
