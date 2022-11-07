import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutCommitteeInput } from './shimokita-college-profile-update-without-committee.input';
import { ShimokitaCollegeProfileCreateWithoutCommitteeInput } from './shimokita-college-profile-create-without-committee.input';

@InputType()
export class ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutCommitteeInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutCommitteeInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutCommitteeInput)
    update!: ShimokitaCollegeProfileUpdateWithoutCommitteeInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutCommitteeInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutCommitteeInput)
    create!: ShimokitaCollegeProfileCreateWithoutCommitteeInput;
}
