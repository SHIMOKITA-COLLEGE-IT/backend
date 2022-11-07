import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeWhereUniqueInput } from './home-where-unique.input';
import { Type } from 'class-transformer';
import { HomeUpdateWithoutShimokitaCollegeProfilesInput } from './home-update-without-shimokita-college-profiles.input';

@InputType()
export class HomeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => HomeWhereUniqueInput, {nullable:false})
    @Type(() => HomeWhereUniqueInput)
    where!: HomeWhereUniqueInput;

    @Field(() => HomeUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => HomeUpdateWithoutShimokitaCollegeProfilesInput)
    data!: HomeUpdateWithoutShimokitaCollegeProfilesInput;
}
