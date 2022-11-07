import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeWhereUniqueInput } from './home-where-unique.input';
import { Type } from 'class-transformer';
import { HomeCreateWithoutShimokitaCollegeProfilesInput } from './home-create-without-shimokita-college-profiles.input';

@InputType()
export class HomeCreateOrConnectWithoutShimokitaCollegeProfilesInput {

    @Field(() => HomeWhereUniqueInput, {nullable:false})
    @Type(() => HomeWhereUniqueInput)
    where!: HomeWhereUniqueInput;

    @Field(() => HomeCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => HomeCreateWithoutShimokitaCollegeProfilesInput)
    create!: HomeCreateWithoutShimokitaCollegeProfilesInput;
}
