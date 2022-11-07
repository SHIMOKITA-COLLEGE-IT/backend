import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutCommitteeInput } from './shimokita-college-profile-create-without-committee.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutCommitteeInput } from './shimokita-college-profile-create-or-connect-without-committee.input';
import { ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutCommitteeInput } from './shimokita-college-profile-upsert-with-where-unique-without-committee.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCommitteeInput } from './shimokita-college-profile-update-with-where-unique-without-committee.input';
import { ShimokitaCollegeProfileUpdateManyWithWhereWithoutCommitteeInput } from './shimokita-college-profile-update-many-with-where-without-committee.input';
import { ShimokitaCollegeProfileScalarWhereInput } from './shimokita-college-profile-scalar-where.input';

@InputType()
export class ShimokitaCollegeProfileUpdateManyWithoutCommitteeNestedInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutCommitteeInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutCommitteeInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutCommitteeInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutCommitteeInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutCommitteeInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutCommitteeInput>;

    @Field(() => [ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutCommitteeInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutCommitteeInput)
    upsert?: Array<ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutCommitteeInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    set?: Array<ShimokitaCollegeProfileWhereUniqueInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    disconnect?: Array<ShimokitaCollegeProfileWhereUniqueInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    delete?: Array<ShimokitaCollegeProfileWhereUniqueInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    connect?: Array<ShimokitaCollegeProfileWhereUniqueInput>;

    @Field(() => [ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCommitteeInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCommitteeInput)
    update?: Array<ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCommitteeInput>;

    @Field(() => [ShimokitaCollegeProfileUpdateManyWithWhereWithoutCommitteeInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateManyWithWhereWithoutCommitteeInput)
    updateMany?: Array<ShimokitaCollegeProfileUpdateManyWithWhereWithoutCommitteeInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileScalarWhereInput)
    deleteMany?: Array<ShimokitaCollegeProfileScalarWhereInput>;
}
