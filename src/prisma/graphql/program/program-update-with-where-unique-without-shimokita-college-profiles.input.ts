import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramUpdateWithoutShimokitaCollegeProfilesInput } from './program-update-without-shimokita-college-profiles.input';

@InputType()
export class ProgramUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: ProgramWhereUniqueInput;

    @Field(() => ProgramUpdateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => ProgramUpdateWithoutShimokitaCollegeProfilesInput)
    data!: ProgramUpdateWithoutShimokitaCollegeProfilesInput;
}
