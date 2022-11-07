import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeCreateWithoutShimokitaCollegeProfilesInput } from './committee-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { CommitteeCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './committee-create-or-connect-without-shimokita-college-profiles.input';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';

@InputType()
export class CommitteeUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput {

    @Field(() => [CommitteeCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CommitteeCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<CommitteeCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CommitteeCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CommitteeCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<CommitteeCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    connect?: Array<CommitteeWhereUniqueInput>;
}
