import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutShimokitaCollegeProfilesInput } from './house-create-without-shimokita-college-profiles.input';

@InputType()
export class HouseCreateOrConnectWithoutShimokitaCollegeProfilesInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: HouseWhereUniqueInput;

    @Field(() => HouseCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => HouseCreateWithoutShimokitaCollegeProfilesInput)
    create!: HouseCreateWithoutShimokitaCollegeProfilesInput;
}
