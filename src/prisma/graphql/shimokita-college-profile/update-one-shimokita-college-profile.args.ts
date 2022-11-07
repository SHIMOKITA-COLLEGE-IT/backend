import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileUpdateInput } from './shimokita-college-profile-update.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';

@ArgsType()
export class UpdateOneShimokitaCollegeProfileArgs {

    @Field(() => ShimokitaCollegeProfileUpdateInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateInput)
    data!: ShimokitaCollegeProfileUpdateInput;

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;
}
