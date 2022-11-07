import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { Type } from 'class-transformer';
import { CommitteeCreateWithoutShimokitaCollegeProfilesInput } from './committee-create-without-shimokita-college-profiles.input';

@InputType()
export class CommitteeCreateOrConnectWithoutShimokitaCollegeProfilesInput {

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;

    @Field(() => CommitteeCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => CommitteeCreateWithoutShimokitaCollegeProfilesInput)
    create!: CommitteeCreateWithoutShimokitaCollegeProfilesInput;
}
