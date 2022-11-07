import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutCoCosInput } from './shimokita-college-profile-create-without-co-cos.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutCoCosInput } from './shimokita-college-profile-create-or-connect-without-co-cos.input';
import { ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutCoCosInput } from './shimokita-college-profile-upsert-with-where-unique-without-co-cos.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCoCosInput } from './shimokita-college-profile-update-with-where-unique-without-co-cos.input';
import { ShimokitaCollegeProfileUpdateManyWithWhereWithoutCoCosInput } from './shimokita-college-profile-update-many-with-where-without-co-cos.input';
import { ShimokitaCollegeProfileScalarWhereInput } from './shimokita-college-profile-scalar-where.input';

@InputType()
export class ShimokitaCollegeProfileUpdateManyWithoutCoCosNestedInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutCoCosInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutCoCosInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutCoCosInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutCoCosInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutCoCosInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutCoCosInput>;

    @Field(() => [ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutCoCosInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutCoCosInput)
    upsert?: Array<ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutCoCosInput>;

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

    @Field(() => [ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCoCosInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCoCosInput)
    update?: Array<ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCoCosInput>;

    @Field(() => [ShimokitaCollegeProfileUpdateManyWithWhereWithoutCoCosInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateManyWithWhereWithoutCoCosInput)
    updateMany?: Array<ShimokitaCollegeProfileUpdateManyWithWhereWithoutCoCosInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileScalarWhereInput)
    deleteMany?: Array<ShimokitaCollegeProfileScalarWhereInput>;
}
