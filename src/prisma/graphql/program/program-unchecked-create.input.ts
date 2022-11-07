import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutProgramsInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-create-nested-many-without-programs.input';

@InputType()
export class ProgramUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutProgramsInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutProgramsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
