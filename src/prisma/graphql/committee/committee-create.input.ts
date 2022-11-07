import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateNestedManyWithoutCommitteeInput } from '../photo/photo-create-nested-many-without-committee.input';
import { ShimokitaCollegeProfileCreateNestedManyWithoutCommitteeInput } from '../shimokita-college-profile/shimokita-college-profile-create-nested-many-without-committee.input';

@InputType()
export class CommitteeCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PhotoCreateNestedManyWithoutCommitteeInput, {nullable:true})
    photos?: PhotoCreateNestedManyWithoutCommitteeInput;

    @Field(() => ShimokitaCollegeProfileCreateNestedManyWithoutCommitteeInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileCreateNestedManyWithoutCommitteeInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
