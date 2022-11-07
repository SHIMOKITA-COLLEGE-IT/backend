import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutShimokitaCollegeProfileInput } from './profile-create-without-shimokita-college-profile.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutShimokitaCollegeProfileInput } from './profile-create-or-connect-without-shimokita-college-profile.input';
import { ProfileUpsertWithoutShimokitaCollegeProfileInput } from './profile-upsert-without-shimokita-college-profile.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutShimokitaCollegeProfileInput } from './profile-update-without-shimokita-college-profile.input';

@InputType()
export class ProfileUpdateOneRequiredWithoutShimokitaCollegeProfileNestedInput {

    @Field(() => ProfileCreateWithoutShimokitaCollegeProfileInput, {nullable:true})
    @Type(() => ProfileCreateWithoutShimokitaCollegeProfileInput)
    create?: ProfileCreateWithoutShimokitaCollegeProfileInput;

    @Field(() => ProfileCreateOrConnectWithoutShimokitaCollegeProfileInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutShimokitaCollegeProfileInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutShimokitaCollegeProfileInput;

    @Field(() => ProfileUpsertWithoutShimokitaCollegeProfileInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutShimokitaCollegeProfileInput)
    upsert?: ProfileUpsertWithoutShimokitaCollegeProfileInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutShimokitaCollegeProfileInput, {nullable:true})
    @Type(() => ProfileUpdateWithoutShimokitaCollegeProfileInput)
    update?: ProfileUpdateWithoutShimokitaCollegeProfileInput;
}
