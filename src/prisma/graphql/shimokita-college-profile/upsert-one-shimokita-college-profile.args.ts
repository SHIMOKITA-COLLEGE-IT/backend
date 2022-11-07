import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateInput } from './shimokita-college-profile-create.input';
import { ShimokitaCollegeProfileUpdateInput } from './shimokita-college-profile-update.input';

@ArgsType()
export class UpsertOneShimokitaCollegeProfileArgs {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileCreateInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateInput)
    create!: ShimokitaCollegeProfileCreateInput;

    @Field(() => ShimokitaCollegeProfileUpdateInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateInput)
    update!: ShimokitaCollegeProfileUpdateInput;
}
