import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateWithoutCommitteeInput } from './shimokita-college-profile-create-without-committee.input';

@InputType()
export class ShimokitaCollegeProfileCreateOrConnectWithoutCommitteeInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutCommitteeInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutCommitteeInput)
    create!: ShimokitaCollegeProfileCreateWithoutCommitteeInput;
}
