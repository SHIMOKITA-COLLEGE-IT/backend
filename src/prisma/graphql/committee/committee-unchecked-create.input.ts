import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoUncheckedCreateNestedManyWithoutCommitteeInput } from '../photo/photo-unchecked-create-nested-many-without-committee.input';
import { ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutCommitteeInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-create-nested-many-without-committee.input';

@InputType()
export class CommitteeUncheckedCreateInput {

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

    @Field(() => PhotoUncheckedCreateNestedManyWithoutCommitteeInput, {nullable:true})
    photos?: PhotoUncheckedCreateNestedManyWithoutCommitteeInput;

    @Field(() => ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutCommitteeInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutCommitteeInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
