import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutProgramsInput } from './shimokita-college-profile-update-without-programs.input';
import { ShimokitaCollegeProfileCreateWithoutProgramsInput } from './shimokita-college-profile-create-without-programs.input';

@InputType()
export class ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutProgramsInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutProgramsInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutProgramsInput)
    update!: ShimokitaCollegeProfileUpdateWithoutProgramsInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutProgramsInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutProgramsInput)
    create!: ShimokitaCollegeProfileCreateWithoutProgramsInput;
}
