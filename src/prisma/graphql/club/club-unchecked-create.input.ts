import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoUncheckedCreateNestedManyWithoutClubsInput } from '../photo/photo-unchecked-create-nested-many-without-clubs.input';
import { ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutClubsInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-create-nested-many-without-clubs.input';

@InputType()
export class ClubUncheckedCreateInput {

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

    @Field(() => PhotoUncheckedCreateNestedManyWithoutClubsInput, {nullable:true})
    photos?: PhotoUncheckedCreateNestedManyWithoutClubsInput;

    @Field(() => ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutClubsInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutClubsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
