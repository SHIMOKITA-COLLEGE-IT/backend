import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutShimokitaCollegeProfilesInput } from './club-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './club-create-or-connect-without-shimokita-college-profiles.input';
import { ClubUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './club-upsert-with-where-unique-without-shimokita-college-profiles.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './club-update-with-where-unique-without-shimokita-college-profiles.input';
import { ClubUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput } from './club-update-many-with-where-without-shimokita-college-profiles.input';
import { ClubScalarWhereInput } from './club-scalar-where.input';

@InputType()
export class ClubUpdateManyWithoutShimokitaCollegeProfilesNestedInput {

    @Field(() => [ClubCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ClubCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<ClubCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ClubCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<ClubCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ClubUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ClubUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    set?: Array<ClubWhereUniqueInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    disconnect?: Array<ClubWhereUniqueInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    delete?: Array<ClubWhereUniqueInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Array<ClubWhereUniqueInput>;

    @Field(() => [ClubUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ClubUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    update?: Array<ClubUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ClubUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ClubUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput)
    updateMany?: Array<ClubUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ClubScalarWhereInput], {nullable:true})
    @Type(() => ClubScalarWhereInput)
    deleteMany?: Array<ClubScalarWhereInput>;
}
