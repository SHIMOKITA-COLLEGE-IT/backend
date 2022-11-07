import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHomesInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-create-nested-many-without-homes.input';

@InputType()
export class HomeUncheckedCreateWithoutPhotosInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHomesInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHomesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
