import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutShimokitaCollegeProfilesInput } from './house-update-without-shimokita-college-profiles.input';
import { HouseCreateWithoutShimokitaCollegeProfilesInput } from './house-create-without-shimokita-college-profiles.input';

@InputType()
export class HouseUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: HouseWhereUniqueInput;

    @Field(() => HouseUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => HouseUpdateWithoutShimokitaCollegeProfilesInput)
    update!: HouseUpdateWithoutShimokitaCollegeProfilesInput;

    @Field(() => HouseCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => HouseCreateWithoutShimokitaCollegeProfilesInput)
    create!: HouseCreateWithoutShimokitaCollegeProfilesInput;
}
