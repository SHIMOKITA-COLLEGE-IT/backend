import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HouseUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput } from '../house/house-unchecked-create-nested-many-without-shimokita-college-profiles.input';
import { HomeUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput } from '../home/home-unchecked-create-nested-many-without-shimokita-college-profiles.input';
import { CommitteeUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput } from '../committee/committee-unchecked-create-nested-many-without-shimokita-college-profiles.input';
import { ClubUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput } from '../club/club-unchecked-create-nested-many-without-shimokita-college-profiles.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedCreateWithoutProgramsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Boolean, {nullable:true})
    isAlumni?: boolean;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    slackEmail!: string;

    @Field(() => Int, {nullable:false})
    roomNumber!: number;

    @Field(() => Int, {nullable:false})
    postNumber!: number;

    @Field(() => HouseUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput, {nullable:true})
    houses?: HouseUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput;

    @Field(() => HomeUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput, {nullable:true})
    homes?: HomeUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput;

    @Field(() => CommitteeUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput, {nullable:true})
    committee?: CommitteeUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput;

    @Field(() => ClubUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput, {nullable:true})
    clubs?: ClubUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
