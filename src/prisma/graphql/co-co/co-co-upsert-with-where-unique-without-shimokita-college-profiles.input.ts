import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Type } from 'class-transformer';
import { CoCoUpdateWithoutShimokitaCollegeProfilesInput } from './co-co-update-without-shimokita-college-profiles.input';
import { CoCoCreateWithoutShimokitaCollegeProfilesInput } from './co-co-create-without-shimokita-college-profiles.input';

@InputType()
export class CoCoUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => CoCoWhereUniqueInput, {nullable:false})
    @Type(() => CoCoWhereUniqueInput)
    where!: CoCoWhereUniqueInput;

    @Field(() => CoCoUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => CoCoUpdateWithoutShimokitaCollegeProfilesInput)
    update!: CoCoUpdateWithoutShimokitaCollegeProfilesInput;

    @Field(() => CoCoCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => CoCoCreateWithoutShimokitaCollegeProfilesInput)
    create!: CoCoCreateWithoutShimokitaCollegeProfilesInput;
}
