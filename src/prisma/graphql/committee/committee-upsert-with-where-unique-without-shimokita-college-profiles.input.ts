import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { Type } from 'class-transformer';
import { CommitteeUpdateWithoutShimokitaCollegeProfilesInput } from './committee-update-without-shimokita-college-profiles.input';
import { CommitteeCreateWithoutShimokitaCollegeProfilesInput } from './committee-create-without-shimokita-college-profiles.input';

@InputType()
export class CommitteeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;

    @Field(() => CommitteeUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => CommitteeUpdateWithoutShimokitaCollegeProfilesInput)
    update!: CommitteeUpdateWithoutShimokitaCollegeProfilesInput;

    @Field(() => CommitteeCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => CommitteeCreateWithoutShimokitaCollegeProfilesInput)
    create!: CommitteeCreateWithoutShimokitaCollegeProfilesInput;
}
