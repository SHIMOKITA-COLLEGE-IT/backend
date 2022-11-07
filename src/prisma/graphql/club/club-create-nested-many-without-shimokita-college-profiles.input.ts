import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutShimokitaCollegeProfilesInput } from './club-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './club-create-or-connect-without-shimokita-college-profiles.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedManyWithoutShimokitaCollegeProfilesInput {

    @Field(() => [ClubCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ClubCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<ClubCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ClubCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<ClubCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Array<ClubWhereUniqueInput>;
}
