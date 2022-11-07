import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramCreateWithoutShimokitaCollegeProfilesInput } from './program-create-without-shimokita-college-profiles.input';

@InputType()
export class ProgramCreateOrConnectWithoutShimokitaCollegeProfilesInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: ProgramWhereUniqueInput;

    @Field(() => ProgramCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => ProgramCreateWithoutShimokitaCollegeProfilesInput)
    create!: ProgramCreateWithoutShimokitaCollegeProfilesInput;
}
