import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeCreateWithoutShimokitaCollegeProfilesInput } from './home-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { HomeCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './home-create-or-connect-without-shimokita-college-profiles.input';
import { HomeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './home-upsert-with-where-unique-without-shimokita-college-profiles.input';
import { HomeWhereUniqueInput } from './home-where-unique.input';
import { HomeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './home-update-with-where-unique-without-shimokita-college-profiles.input';
import { HomeUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput } from './home-update-many-with-where-without-shimokita-college-profiles.input';
import { HomeScalarWhereInput } from './home-scalar-where.input';

@InputType()
export class HomeUpdateManyWithoutShimokitaCollegeProfilesNestedInput {

    @Field(() => [HomeCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HomeCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<HomeCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HomeCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HomeCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<HomeCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HomeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HomeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    upsert?: Array<HomeUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    set?: Array<HomeWhereUniqueInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    disconnect?: Array<HomeWhereUniqueInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    delete?: Array<HomeWhereUniqueInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    connect?: Array<HomeWhereUniqueInput>;

    @Field(() => [HomeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HomeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    update?: Array<HomeUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HomeUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HomeUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput)
    updateMany?: Array<HomeUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HomeScalarWhereInput], {nullable:true})
    @Type(() => HomeScalarWhereInput)
    deleteMany?: Array<HomeScalarWhereInput>;
}
