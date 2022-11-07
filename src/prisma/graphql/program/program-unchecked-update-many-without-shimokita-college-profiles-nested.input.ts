import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutShimokitaCollegeProfilesInput } from './program-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './program-create-or-connect-without-shimokita-college-profiles.input';
import { ProgramUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './program-upsert-with-where-unique-without-shimokita-college-profiles.input';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { ProgramUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput } from './program-update-with-where-unique-without-shimokita-college-profiles.input';
import { ProgramUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput } from './program-update-many-with-where-without-shimokita-college-profiles.input';
import { ProgramScalarWhereInput } from './program-scalar-where.input';

@InputType()
export class ProgramUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput {

    @Field(() => [ProgramCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ProgramCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<ProgramCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ProgramCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ProgramUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ProgramUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    set?: Array<ProgramWhereUniqueInput>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    disconnect?: Array<ProgramWhereUniqueInput>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    delete?: Array<ProgramWhereUniqueInput>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    connect?: Array<ProgramWhereUniqueInput>;

    @Field(() => [ProgramUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ProgramUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput)
    update?: Array<ProgramUpdateWithWhereUniqueWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ProgramUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ProgramUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput)
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ProgramScalarWhereInput], {nullable:true})
    @Type(() => ProgramScalarWhereInput)
    deleteMany?: Array<ProgramScalarWhereInput>;
}
