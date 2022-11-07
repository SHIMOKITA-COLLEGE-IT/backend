import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutShimokitaCollegeProfileInput } from './profile-create-without-shimokita-college-profile.input';

@InputType()
export class ProfileCreateOrConnectWithoutShimokitaCollegeProfileInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutShimokitaCollegeProfileInput, {nullable:false})
    @Type(() => ProfileCreateWithoutShimokitaCollegeProfileInput)
    create!: ProfileCreateWithoutShimokitaCollegeProfileInput;
}
