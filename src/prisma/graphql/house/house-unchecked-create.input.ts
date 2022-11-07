import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoUncheckedCreateNestedManyWithoutHousesInput } from '../photo/photo-unchecked-create-nested-many-without-houses.input';
import { ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHousesInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-create-nested-many-without-houses.input';

@InputType()
export class HouseUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => PhotoUncheckedCreateNestedManyWithoutHousesInput, {nullable:true})
    photos?: PhotoUncheckedCreateNestedManyWithoutHousesInput;

    @Field(() => ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHousesInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHousesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
