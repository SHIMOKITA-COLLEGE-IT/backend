import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutPhotosInput } from './house-create-without-photos.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutPhotosInput } from './house-create-or-connect-without-photos.input';
import { HouseUpsertWithWhereUniqueWithoutPhotosInput } from './house-upsert-with-where-unique-without-photos.input';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { HouseUpdateWithWhereUniqueWithoutPhotosInput } from './house-update-with-where-unique-without-photos.input';
import { HouseUpdateManyWithWhereWithoutPhotosInput } from './house-update-many-with-where-without-photos.input';
import { HouseScalarWhereInput } from './house-scalar-where.input';

@InputType()
export class HouseUncheckedUpdateManyWithoutPhotosNestedInput {

    @Field(() => [HouseCreateWithoutPhotosInput], {nullable:true})
    @Type(() => HouseCreateWithoutPhotosInput)
    create?: Array<HouseCreateWithoutPhotosInput>;

    @Field(() => [HouseCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<HouseCreateOrConnectWithoutPhotosInput>;

    @Field(() => [HouseUpsertWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => HouseUpsertWithWhereUniqueWithoutPhotosInput)
    upsert?: Array<HouseUpsertWithWhereUniqueWithoutPhotosInput>;

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

    @Field(() => [HouseUpdateWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => HouseUpdateWithWhereUniqueWithoutPhotosInput)
    update?: Array<HouseUpdateWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [HouseUpdateManyWithWhereWithoutPhotosInput], {nullable:true})
    @Type(() => HouseUpdateManyWithWhereWithoutPhotosInput)
    updateMany?: Array<HouseUpdateManyWithWhereWithoutPhotosInput>;

    @Field(() => [HouseScalarWhereInput], {nullable:true})
    @Type(() => HouseScalarWhereInput)
    deleteMany?: Array<HouseScalarWhereInput>;
}
