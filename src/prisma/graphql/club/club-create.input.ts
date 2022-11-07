import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateNestedManyWithoutClubsInput } from '../photo/photo-create-nested-many-without-clubs.input';
import { ShimokitaCollegeProfileCreateNestedManyWithoutClubsInput } from '../shimokita-college-profile/shimokita-college-profile-create-nested-many-without-clubs.input';

@InputType()
export class ClubCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PhotoCreateNestedManyWithoutClubsInput, {nullable:true})
    photos?: PhotoCreateNestedManyWithoutClubsInput;

    @Field(() => ShimokitaCollegeProfileCreateNestedManyWithoutClubsInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileCreateNestedManyWithoutClubsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
