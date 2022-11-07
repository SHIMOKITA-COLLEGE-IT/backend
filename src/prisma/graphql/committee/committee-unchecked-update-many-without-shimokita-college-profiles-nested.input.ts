import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeCreateWithoutShimokitaCollegeProfilesInput } from './committee-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { CommitteeCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './committee-create-or-connect-without-shimokita-college-profiles.input';
import { CommitteeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './committee-upsert-with-where-unique-without-shimokita-college-profiles.input';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { CommitteeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './committee-update-with-where-unique-without-shimokita-college-profiles.input';
import { CommitteeUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput } from './committee-update-many-with-where-without-shimokita-college-profiles.input';
import { CommitteeScalarWhereInput } from './committee-scalar-where.input';

@InputType()
export class CommitteeUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput {

    @Field(() => [CommitteeCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CommitteeCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<CommitteeCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CommitteeCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CommitteeCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<CommitteeCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CommitteeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CommitteeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    upsert?: Array<CommitteeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    set?: Array<CommitteeWhereUniqueInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    disconnect?: Array<CommitteeWhereUniqueInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    delete?: Array<CommitteeWhereUniqueInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    connect?: Array<CommitteeWhereUniqueInput>;

    @Field(() => [CommitteeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CommitteeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    update?: Array<CommitteeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CommitteeUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CommitteeUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput)
    updateMany?: Array<CommitteeUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CommitteeScalarWhereInput], {nullable:true})
    @Type(() => CommitteeScalarWhereInput)
    deleteMany?: Array<CommitteeScalarWhereInput>;
}
