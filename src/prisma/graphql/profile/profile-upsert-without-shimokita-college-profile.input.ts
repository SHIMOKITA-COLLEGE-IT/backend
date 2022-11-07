import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutShimokitaCollegeProfileInput } from './profile-update-without-shimokita-college-profile.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutShimokitaCollegeProfileInput } from './profile-create-without-shimokita-college-profile.input';

@InputType()
export class ProfileUpsertWithoutShimokitaCollegeProfileInput {

    @Field(() => ProfileUpdateWithoutShimokitaCollegeProfileInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutShimokitaCollegeProfileInput)
    update!: ProfileUpdateWithoutShimokitaCollegeProfileInput;

    @Field(() => ProfileCreateWithoutShimokitaCollegeProfileInput, {nullable:false})
    @Type(() => ProfileCreateWithoutShimokitaCollegeProfileInput)
    create!: ProfileCreateWithoutShimokitaCollegeProfileInput;
}
