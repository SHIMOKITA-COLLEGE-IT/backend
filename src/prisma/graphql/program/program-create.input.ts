import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateNestedManyWithoutProgramsInput } from '../shimokita-college-profile/shimokita-college-profile-create-nested-many-without-programs.input';

@InputType()
export class ProgramCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => ShimokitaCollegeProfileCreateNestedManyWithoutProgramsInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileCreateNestedManyWithoutProgramsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
