import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { Type } from 'class-transformer';
import { CommitteeUpdateWithoutShimokitaCollegeProfilesInput } from './committee-update-without-shimokita-college-profiles.input';

@InputType()
export class CommitteeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;

    @Field(() => CommitteeUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => CommitteeUpdateWithoutShimokitaCollegeProfilesInput)
    data!: CommitteeUpdateWithoutShimokitaCollegeProfilesInput;
}
