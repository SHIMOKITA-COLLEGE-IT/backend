import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateNestedManyWithoutHomesInput } from '../photo/photo-create-nested-many-without-homes.input';
import { ShimokitaCollegeProfileCreateNestedManyWithoutHomesInput } from '../shimokita-college-profile/shimokita-college-profile-create-nested-many-without-homes.input';

@InputType()
export class HomeCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => PhotoCreateNestedManyWithoutHomesInput, {nullable:true})
    photos?: PhotoCreateNestedManyWithoutHomesInput;

    @Field(() => ShimokitaCollegeProfileCreateNestedManyWithoutHomesInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileCreateNestedManyWithoutHomesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
