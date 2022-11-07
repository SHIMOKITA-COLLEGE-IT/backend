import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramUpdateWithoutShimokitaCollegeProfilesInput } from './program-update-without-shimokita-college-profiles.input';
import { ProgramCreateWithoutShimokitaCollegeProfilesInput } from './program-create-without-shimokita-college-profiles.input';

@InputType()
export class ProgramUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: ProgramWhereUniqueInput;

    @Field(() => ProgramUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => ProgramUpdateWithoutShimokitaCollegeProfilesInput)
    update!: ProgramUpdateWithoutShimokitaCollegeProfilesInput;

    @Field(() => ProgramCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => ProgramCreateWithoutShimokitaCollegeProfilesInput)
    create!: ProgramCreateWithoutShimokitaCollegeProfilesInput;
}
