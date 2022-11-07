import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileScalarWhereInput } from './shimokita-college-profile-scalar-where.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateManyMutationInput } from './shimokita-college-profile-update-many-mutation.input';

@InputType()
export class ShimokitaCollegeProfileUpdateManyWithWhereWithoutProgramsInput {

    @Field(() => ShimokitaCollegeProfileScalarWhereInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileScalarWhereInput)
    where!: ShimokitaCollegeProfileScalarWhereInput;

    @Field(() => ShimokitaCollegeProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateManyMutationInput)
    data!: ShimokitaCollegeProfileUpdateManyMutationInput;
}
