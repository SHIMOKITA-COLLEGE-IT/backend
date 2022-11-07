import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutHousesInput } from './shimokita-college-profile-create-without-houses.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutHousesInput } from './shimokita-college-profile-create-or-connect-without-houses.input';
import { ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHousesInput } from './shimokita-college-profile-upsert-with-where-unique-without-houses.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutHousesInput } from './shimokita-college-profile-update-with-where-unique-without-houses.input';
import { ShimokitaCollegeProfileUpdateManyWithWhereWithoutHousesInput } from './shimokita-college-profile-update-many-with-where-without-houses.input';
import { ShimokitaCollegeProfileScalarWhereInput } from './shimokita-college-profile-scalar-where.input';

@InputType()
export class ShimokitaCollegeProfileUpdateManyWithoutHousesNestedInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutHousesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutHousesInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutHousesInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutHousesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutHousesInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutHousesInput>;

    @Field(() => [ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHousesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHousesInput)
    upsert?: Array<ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHousesInput>;

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

    @Field(() => [ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutHousesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutHousesInput)
    update?: Array<ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutHousesInput>;

    @Field(() => [ShimokitaCollegeProfileUpdateManyWithWhereWithoutHousesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateManyWithWhereWithoutHousesInput)
    updateMany?: Array<ShimokitaCollegeProfileUpdateManyWithWhereWithoutHousesInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileScalarWhereInput)
    deleteMany?: Array<ShimokitaCollegeProfileScalarWhereInput>;
}
