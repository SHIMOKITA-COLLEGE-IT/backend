import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateNestedManyWithoutHousesInput } from '../photo/photo-create-nested-many-without-houses.input';
import { ShimokitaCollegeProfileCreateNestedManyWithoutHousesInput } from '../shimokita-college-profile/shimokita-college-profile-create-nested-many-without-houses.input';

@InputType()
export class HouseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => PhotoCreateNestedManyWithoutHousesInput, {nullable:true})
    photos?: PhotoCreateNestedManyWithoutHousesInput;

    @Field(() => ShimokitaCollegeProfileCreateNestedManyWithoutHousesInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileCreateNestedManyWithoutHousesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
