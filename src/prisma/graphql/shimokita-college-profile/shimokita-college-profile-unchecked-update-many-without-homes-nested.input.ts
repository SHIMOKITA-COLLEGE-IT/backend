import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutHomesInput } from './shimokita-college-profile-create-without-homes.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutHomesInput } from './shimokita-college-profile-create-or-connect-without-homes.input';
import { ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHomesInput } from './shimokita-college-profile-upsert-with-where-unique-without-homes.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutHomesInput } from './shimokita-college-profile-update-with-where-unique-without-homes.input';
import { ShimokitaCollegeProfileUpdateManyWithWhereWithoutHomesInput } from './shimokita-college-profile-update-many-with-where-without-homes.input';
import { ShimokitaCollegeProfileScalarWhereInput } from './shimokita-college-profile-scalar-where.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedUpdateManyWithoutHomesNestedInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutHomesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutHomesInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutHomesInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutHomesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutHomesInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutHomesInput>;

    @Field(() => [ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHomesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHomesInput)
    upsert?: Array<ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHomesInput>;

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

    @Field(() => [ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutHomesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutHomesInput)
    update?: Array<ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutHomesInput>;

    @Field(() => [ShimokitaCollegeProfileUpdateManyWithWhereWithoutHomesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateManyWithWhereWithoutHomesInput)
    updateMany?: Array<ShimokitaCollegeProfileUpdateManyWithWhereWithoutHomesInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileScalarWhereInput)
    deleteMany?: Array<ShimokitaCollegeProfileScalarWhereInput>;
}
