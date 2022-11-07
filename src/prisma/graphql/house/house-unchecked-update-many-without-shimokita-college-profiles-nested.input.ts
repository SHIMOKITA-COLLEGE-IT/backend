import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutShimokitaCollegeProfilesInput } from './house-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './house-create-or-connect-without-shimokita-college-profiles.input';
import { HouseUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './house-upsert-with-where-unique-without-shimokita-college-profiles.input';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { HouseUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './house-update-with-where-unique-without-shimokita-college-profiles.input';
import { HouseUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput } from './house-update-many-with-where-without-shimokita-college-profiles.input';
import { HouseScalarWhereInput } from './house-scalar-where.input';

@InputType()
export class HouseUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput {

    @Field(() => [HouseCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HouseCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<HouseCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HouseCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<HouseCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HouseUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HouseUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    upsert?: Array<HouseUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    set?: Array<HouseWhereUniqueInput>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    disconnect?: Array<HouseWhereUniqueInput>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    delete?: Array<HouseWhereUniqueInput>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Array<HouseWhereUniqueInput>;

    @Field(() => [HouseUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HouseUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    update?: Array<HouseUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HouseUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HouseUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput)
    updateMany?: Array<HouseUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HouseScalarWhereInput], {nullable:true})
    @Type(() => HouseScalarWhereInput)
    deleteMany?: Array<HouseScalarWhereInput>;
}
