import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutPhotosInput } from './club-create-without-photos.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutPhotosInput } from './club-create-or-connect-without-photos.input';
import { ClubUpsertWithWhereUniqueWithoutPhotosInput } from './club-upsert-with-where-unique-without-photos.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithWhereUniqueWithoutPhotosInput } from './club-update-with-where-unique-without-photos.input';
import { ClubUpdateManyWithWhereWithoutPhotosInput } from './club-update-many-with-where-without-photos.input';
import { ClubScalarWhereInput } from './club-scalar-where.input';

@InputType()
export class ClubUpdateManyWithoutPhotosNestedInput {

    @Field(() => [ClubCreateWithoutPhotosInput], {nullable:true})
    @Type(() => ClubCreateWithoutPhotosInput)
    create?: Array<ClubCreateWithoutPhotosInput>;

    @Field(() => [ClubCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<ClubCreateOrConnectWithoutPhotosInput>;

    @Field(() => [ClubUpsertWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => ClubUpsertWithWhereUniqueWithoutPhotosInput)
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    set?: Array<ClubWhereUniqueInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    disconnect?: Array<ClubWhereUniqueInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    delete?: Array<ClubWhereUniqueInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Array<ClubWhereUniqueInput>;

    @Field(() => [ClubUpdateWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => ClubUpdateWithWhereUniqueWithoutPhotosInput)
    update?: Array<ClubUpdateWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [ClubUpdateManyWithWhereWithoutPhotosInput], {nullable:true})
    @Type(() => ClubUpdateManyWithWhereWithoutPhotosInput)
    updateMany?: Array<ClubUpdateManyWithWhereWithoutPhotosInput>;

    @Field(() => [ClubScalarWhereInput], {nullable:true})
    @Type(() => ClubScalarWhereInput)
    deleteMany?: Array<ClubScalarWhereInput>;
}
