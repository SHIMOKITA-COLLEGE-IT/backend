import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoUncheckedCreateNestedManyWithoutHomesInput } from '../photo/photo-unchecked-create-nested-many-without-homes.input';
import { ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHomesInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-create-nested-many-without-homes.input';

@InputType()
export class HomeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => PhotoUncheckedCreateNestedManyWithoutHomesInput, {nullable:true})
    photos?: PhotoUncheckedCreateNestedManyWithoutHomesInput;

    @Field(() => ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHomesInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHomesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
