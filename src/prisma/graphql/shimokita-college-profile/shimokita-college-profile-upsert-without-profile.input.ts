import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileUpdateWithoutProfileInput } from './shimokita-college-profile-update-without-profile.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateWithoutProfileInput } from './shimokita-college-profile-create-without-profile.input';

@InputType()
export class ShimokitaCollegeProfileUpsertWithoutProfileInput {

    @Field(() => ShimokitaCollegeProfileUpdateWithoutProfileInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutProfileInput)
    update!: ShimokitaCollegeProfileUpdateWithoutProfileInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutProfileInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutProfileInput)
    create!: ShimokitaCollegeProfileCreateWithoutProfileInput;
}
