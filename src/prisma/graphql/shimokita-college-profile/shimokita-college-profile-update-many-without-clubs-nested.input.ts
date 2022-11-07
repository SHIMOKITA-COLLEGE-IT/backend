import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutClubsInput } from './shimokita-college-profile-create-without-clubs.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutClubsInput } from './shimokita-college-profile-create-or-connect-without-clubs.input';
import { ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutClubsInput } from './shimokita-college-profile-upsert-with-where-unique-without-clubs.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutClubsInput } from './shimokita-college-profile-update-with-where-unique-without-clubs.input';
import { ShimokitaCollegeProfileUpdateManyWithWhereWithoutClubsInput } from './shimokita-college-profile-update-many-with-where-without-clubs.input';
import { ShimokitaCollegeProfileScalarWhereInput } from './shimokita-college-profile-scalar-where.input';

@InputType()
export class ShimokitaCollegeProfileUpdateManyWithoutClubsNestedInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutClubsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutClubsInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutClubsInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutClubsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutClubsInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutClubsInput>;

    @Field(() => [ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutClubsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutClubsInput)
    upsert?: Array<ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutClubsInput>;

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

    @Field(() => [ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutClubsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutClubsInput)
    update?: Array<ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutClubsInput>;

    @Field(() => [ShimokitaCollegeProfileUpdateManyWithWhereWithoutClubsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateManyWithWhereWithoutClubsInput)
    updateMany?: Array<ShimokitaCollegeProfileUpdateManyWithWhereWithoutClubsInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileScalarWhereInput)
    deleteMany?: Array<ShimokitaCollegeProfileScalarWhereInput>;
}
