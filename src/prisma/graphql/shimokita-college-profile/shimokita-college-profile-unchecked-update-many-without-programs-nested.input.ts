import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutProgramsInput } from './shimokita-college-profile-create-without-programs.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutProgramsInput } from './shimokita-college-profile-create-or-connect-without-programs.input';
import { ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutProgramsInput } from './shimokita-college-profile-upsert-with-where-unique-without-programs.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutProgramsInput } from './shimokita-college-profile-update-with-where-unique-without-programs.input';
import { ShimokitaCollegeProfileUpdateManyWithWhereWithoutProgramsInput } from './shimokita-college-profile-update-many-with-where-without-programs.input';
import { ShimokitaCollegeProfileScalarWhereInput } from './shimokita-college-profile-scalar-where.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedUpdateManyWithoutProgramsNestedInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutProgramsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutProgramsInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutProgramsInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutProgramsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutProgramsInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutProgramsInput>;

    @Field(() => [ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutProgramsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutProgramsInput)
    upsert?: Array<ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutProgramsInput>;

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

    @Field(() => [ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutProgramsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutProgramsInput)
    update?: Array<ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutProgramsInput>;

    @Field(() => [ShimokitaCollegeProfileUpdateManyWithWhereWithoutProgramsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateManyWithWhereWithoutProgramsInput)
    updateMany?: Array<ShimokitaCollegeProfileUpdateManyWithWhereWithoutProgramsInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileScalarWhereInput)
    deleteMany?: Array<ShimokitaCollegeProfileScalarWhereInput>;
}
