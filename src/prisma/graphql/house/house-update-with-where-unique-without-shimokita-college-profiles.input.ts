import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutShimokitaCollegeProfilesInput } from './house-update-without-shimokita-college-profiles.input';

@InputType()
export class HouseUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: HouseWhereUniqueInput;

    @Field(() => HouseUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => HouseUpdateWithoutShimokitaCollegeProfilesInput)
    data!: HouseUpdateWithoutShimokitaCollegeProfilesInput;
}
