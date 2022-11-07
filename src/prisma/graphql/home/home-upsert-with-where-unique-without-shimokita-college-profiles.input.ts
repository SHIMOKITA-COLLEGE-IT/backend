import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeWhereUniqueInput } from './home-where-unique.input';
import { Type } from 'class-transformer';
import { HomeUpdateWithoutShimokitaCollegeProfilesInput } from './home-update-without-shimokita-college-profiles.input';
import { HomeCreateWithoutShimokitaCollegeProfilesInput } from './home-create-without-shimokita-college-profiles.input';

@InputType()
export class HomeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => HomeWhereUniqueInput, {nullable:false})
    @Type(() => HomeWhereUniqueInput)
    where!: HomeWhereUniqueInput;

    @Field(() => HomeUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => HomeUpdateWithoutShimokitaCollegeProfilesInput)
    update!: HomeUpdateWithoutShimokitaCollegeProfilesInput;

    @Field(() => HomeCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => HomeCreateWithoutShimokitaCollegeProfilesInput)
    create!: HomeCreateWithoutShimokitaCollegeProfilesInput;
}
