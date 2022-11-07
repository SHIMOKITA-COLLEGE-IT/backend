import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeScalarWhereInput } from './home-scalar-where.input';
import { Type } from 'class-transformer';
import { HomeUpdateManyMutationInput } from './home-update-many-mutation.input';

@InputType()
export class HomeUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput {

    @Field(() => HomeScalarWhereInput, {nullable:false})
    @Type(() => HomeScalarWhereInput)
    where!: HomeScalarWhereInput;

    @Field(() => HomeUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeUpdateManyMutationInput)
    data!: HomeUpdateManyMutationInput;
}
