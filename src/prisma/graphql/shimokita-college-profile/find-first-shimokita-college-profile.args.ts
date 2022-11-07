import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereInput } from './shimokita-college-profile-where.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileOrderByWithRelationInput } from './shimokita-college-profile-order-by-with-relation.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShimokitaCollegeProfileScalarFieldEnum } from './shimokita-college-profile-scalar-field.enum';

@ArgsType()
export class FindFirstShimokitaCollegeProfileArgs {

    @Field(() => ShimokitaCollegeProfileWhereInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereInput)
    where?: ShimokitaCollegeProfileWhereInput;

    @Field(() => [ShimokitaCollegeProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShimokitaCollegeProfileOrderByWithRelationInput>;

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:true})
    cursor?: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShimokitaCollegeProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShimokitaCollegeProfileScalarFieldEnum>;
}
