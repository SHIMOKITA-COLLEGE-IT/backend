import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubUpdateWithoutShimokitaCollegeProfilesInput } from './club-update-without-shimokita-college-profiles.input';

@InputType()
export class ClubUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => ClubUpdateWithoutShimokitaCollegeProfilesInput)
    data!: ClubUpdateWithoutShimokitaCollegeProfilesInput;
}
