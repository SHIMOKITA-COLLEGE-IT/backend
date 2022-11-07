import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutCommitteeInput } from './shimokita-college-profile-update-without-committee.input';

@InputType()
export class ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCommitteeInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutCommitteeInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutCommitteeInput)
    data!: ShimokitaCollegeProfileUpdateWithoutCommitteeInput;
}
