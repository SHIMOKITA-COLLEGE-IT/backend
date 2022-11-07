import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutShimokitaCollegeProfileInput } from './profile-create-without-shimokita-college-profile.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutShimokitaCollegeProfileInput } from './profile-create-or-connect-without-shimokita-college-profile.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutShimokitaCollegeProfileInput {

    @Field(() => ProfileCreateWithoutShimokitaCollegeProfileInput, {nullable:true})
    @Type(() => ProfileCreateWithoutShimokitaCollegeProfileInput)
    create?: ProfileCreateWithoutShimokitaCollegeProfileInput;

    @Field(() => ProfileCreateOrConnectWithoutShimokitaCollegeProfileInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutShimokitaCollegeProfileInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutShimokitaCollegeProfileInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: ProfileWhereUniqueInput;
}
