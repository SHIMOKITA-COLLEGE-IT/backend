import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutShimokitaCollegeProfileInput } from '../profile/profile-create-nested-one-without-shimokita-college-profile.input';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { ProgramCreateNestedManyWithoutShimokitaCollegeProfilesInput } from '../program/program-create-nested-many-without-shimokita-college-profiles.input';
import { HouseCreateNestedManyWithoutShimokitaCollegeProfilesInput } from '../house/house-create-nested-many-without-shimokita-college-profiles.input';
import { HomeCreateNestedManyWithoutShimokitaCollegeProfilesInput } from '../home/home-create-nested-many-without-shimokita-college-profiles.input';
import { ClubCreateNestedManyWithoutShimokitaCollegeProfilesInput } from '../club/club-create-nested-many-without-shimokita-college-profiles.input';

@InputType()
export class ShimokitaCollegeProfileCreateWithoutCoCosInput {

    @Field(() => ProfileCreateNestedOneWithoutShimokitaCollegeProfileInput, {nullable:false})
    profile!: ProfileCreateNestedOneWithoutShimokitaCollegeProfileInput;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    slackEmail!: string;

    @Field(() => Int, {nullable:false})
    roomNumber!: number;

    @Field(() => Int, {nullable:false})
    postNumber!: number;

    @Field(() => ProgramCreateNestedManyWithoutShimokitaCollegeProfilesInput, {nullable:true})
    programs?: ProgramCreateNestedManyWithoutShimokitaCollegeProfilesInput;

    @Field(() => HouseCreateNestedManyWithoutShimokitaCollegeProfilesInput, {nullable:true})
    houses?: HouseCreateNestedManyWithoutShimokitaCollegeProfilesInput;

    @Field(() => HomeCreateNestedManyWithoutShimokitaCollegeProfilesInput, {nullable:true})
    homes?: HomeCreateNestedManyWithoutShimokitaCollegeProfilesInput;

    @Field(() => ClubCreateNestedManyWithoutShimokitaCollegeProfilesInput, {nullable:true})
    clubs?: ClubCreateNestedManyWithoutShimokitaCollegeProfilesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}