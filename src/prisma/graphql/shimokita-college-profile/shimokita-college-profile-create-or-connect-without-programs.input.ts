import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateWithoutProgramsInput } from './shimokita-college-profile-create-without-programs.input';

@InputType()
export class ShimokitaCollegeProfileCreateOrConnectWithoutProgramsInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutProgramsInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutProgramsInput)
    create!: ShimokitaCollegeProfileCreateWithoutProgramsInput;
}
