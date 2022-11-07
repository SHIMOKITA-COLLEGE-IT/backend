import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutCommitteeInput } from './shimokita-college-profile-create-without-committee.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutCommitteeInput } from './shimokita-college-profile-create-or-connect-without-committee.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutCommitteeInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutCommitteeInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutCommitteeInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutCommitteeInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutCommitteeInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutCommitteeInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutCommitteeInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    connect?: Array<ShimokitaCollegeProfileWhereUniqueInput>;
}
