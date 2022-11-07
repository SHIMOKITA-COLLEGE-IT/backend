import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateNestedManyWithoutCoCosInput } from '../photo/photo-create-nested-many-without-co-cos.input';
import { ShimokitaCollegeProfileCreateNestedManyWithoutCoCosInput } from '../shimokita-college-profile/shimokita-college-profile-create-nested-many-without-co-cos.input';

@InputType()
export class CoCoCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PhotoCreateNestedManyWithoutCoCosInput, {nullable:true})
    photos?: PhotoCreateNestedManyWithoutCoCosInput;

    @Field(() => ShimokitaCollegeProfileCreateNestedManyWithoutCoCosInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileCreateNestedManyWithoutCoCosInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
