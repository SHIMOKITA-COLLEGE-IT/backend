import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoCreateWithoutShimokitaCollegeProfilesInput } from './co-co-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { CoCoCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './co-co-create-or-connect-without-shimokita-college-profiles.input';
import { CoCoUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './co-co-upsert-with-where-unique-without-shimokita-college-profiles.input';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { CoCoUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './co-co-update-with-where-unique-without-shimokita-college-profiles.input';
import { CoCoUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput } from './co-co-update-many-with-where-without-shimokita-college-profiles.input';
import { CoCoScalarWhereInput } from './co-co-scalar-where.input';

@InputType()
export class CoCoUpdateManyWithoutShimokitaCollegeProfilesNestedInput {

    @Field(() => [CoCoCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CoCoCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<CoCoCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CoCoCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CoCoCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<CoCoCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CoCoUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CoCoUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    upsert?: Array<CoCoUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CoCoWhereUniqueInput], {nullable:true})
    @Type(() => CoCoWhereUniqueInput)
    set?: Array<CoCoWhereUniqueInput>;

    @Field(() => [CoCoWhereUniqueInput], {nullable:true})
    @Type(() => CoCoWhereUniqueInput)
    disconnect?: Array<CoCoWhereUniqueInput>;

    @Field(() => [CoCoWhereUniqueInput], {nullable:true})
    @Type(() => CoCoWhereUniqueInput)
    delete?: Array<CoCoWhereUniqueInput>;

    @Field(() => [CoCoWhereUniqueInput], {nullable:true})
    @Type(() => CoCoWhereUniqueInput)
    connect?: Array<CoCoWhereUniqueInput>;

    @Field(() => [CoCoUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CoCoUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    update?: Array<CoCoUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CoCoUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CoCoUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput)
    updateMany?: Array<CoCoUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CoCoScalarWhereInput], {nullable:true})
    @Type(() => CoCoScalarWhereInput)
    deleteMany?: Array<CoCoScalarWhereInput>;
}
