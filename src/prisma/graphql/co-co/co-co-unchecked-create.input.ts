import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoUncheckedCreateNestedManyWithoutCoCosInput } from '../photo/photo-unchecked-create-nested-many-without-co-cos.input';
import { ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutCoCosInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-create-nested-many-without-co-cos.input';

@InputType()
export class CoCoUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PhotoUncheckedCreateNestedManyWithoutCoCosInput, {nullable:true})
    photos?: PhotoUncheckedCreateNestedManyWithoutCoCosInput;

    @Field(() => ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutCoCosInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutCoCosInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}