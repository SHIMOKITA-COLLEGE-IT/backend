import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubUpdateWithoutShimokitaCollegeProfilesInput } from './club-update-without-shimokita-college-profiles.input';
import { ClubCreateWithoutShimokitaCollegeProfilesInput } from './club-create-without-shimokita-college-profiles.input';

@InputType()
export class ClubUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => ClubUpdateWithoutShimokitaCollegeProfilesInput)
    update!: ClubUpdateWithoutShimokitaCollegeProfilesInput;

    @Field(() => ClubCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => ClubCreateWithoutShimokitaCollegeProfilesInput)
    create!: ClubCreateWithoutShimokitaCollegeProfilesInput;
}
