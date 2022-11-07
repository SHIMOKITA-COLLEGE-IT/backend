import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Type } from 'class-transformer';
import { CoCoUpdateWithoutShimokitaCollegeProfilesInput } from './co-co-update-without-shimokita-college-profiles.input';

@InputType()
export class CoCoUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => CoCoWhereUniqueInput, {nullable:false})
    @Type(() => CoCoWhereUniqueInput)
    where!: CoCoWhereUniqueInput;

    @Field(() => CoCoUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => CoCoUpdateWithoutShimokitaCollegeProfilesInput)
    data!: CoCoUpdateWithoutShimokitaCollegeProfilesInput;
}
