import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubCreateWithoutShimokitaCollegeProfilesInput } from './club-create-without-shimokita-college-profiles.input';

@InputType()
export class ClubCreateOrConnectWithoutShimokitaCollegeProfilesInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => ClubCreateWithoutShimokitaCollegeProfilesInput)
    create!: ClubCreateWithoutShimokitaCollegeProfilesInput;
}
