import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutProgramsInput } from './shimokita-college-profile-update-without-programs.input';

@InputType()
export class ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutProgramsInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutProgramsInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutProgramsInput)
    data!: ShimokitaCollegeProfileUpdateWithoutProgramsInput;
}
