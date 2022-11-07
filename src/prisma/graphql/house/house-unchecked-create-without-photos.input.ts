import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHousesInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-create-nested-many-without-houses.input';

@InputType()
export class HouseUncheckedCreateWithoutPhotosInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHousesInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutHousesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
