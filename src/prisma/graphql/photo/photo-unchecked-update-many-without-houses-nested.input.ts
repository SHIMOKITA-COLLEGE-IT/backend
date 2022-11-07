import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutHousesInput } from './photo-create-without-houses.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutHousesInput } from './photo-create-or-connect-without-houses.input';
import { PhotoUpsertWithWhereUniqueWithoutHousesInput } from './photo-upsert-with-where-unique-without-houses.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithWhereUniqueWithoutHousesInput } from './photo-update-with-where-unique-without-houses.input';
import { PhotoUpdateManyWithWhereWithoutHousesInput } from './photo-update-many-with-where-without-houses.input';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';

@InputType()
export class PhotoUncheckedUpdateManyWithoutHousesNestedInput {

    @Field(() => [PhotoCreateWithoutHousesInput], {nullable:true})
    @Type(() => PhotoCreateWithoutHousesInput)
    create?: Array<PhotoCreateWithoutHousesInput>;

    @Field(() => [PhotoCreateOrConnectWithoutHousesInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutHousesInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutHousesInput>;

    @Field(() => [PhotoUpsertWithWhereUniqueWithoutHousesInput], {nullable:true})
    @Type(() => PhotoUpsertWithWhereUniqueWithoutHousesInput)
    upsert?: Array<PhotoUpsertWithWhereUniqueWithoutHousesInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    set?: Array<PhotoWhereUniqueInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    disconnect?: Array<PhotoWhereUniqueInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    delete?: Array<PhotoWhereUniqueInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    connect?: Array<PhotoWhereUniqueInput>;

    @Field(() => [PhotoUpdateWithWhereUniqueWithoutHousesInput], {nullable:true})
    @Type(() => PhotoUpdateWithWhereUniqueWithoutHousesInput)
    update?: Array<PhotoUpdateWithWhereUniqueWithoutHousesInput>;

    @Field(() => [PhotoUpdateManyWithWhereWithoutHousesInput], {nullable:true})
    @Type(() => PhotoUpdateManyWithWhereWithoutHousesInput)
    updateMany?: Array<PhotoUpdateManyWithWhereWithoutHousesInput>;

    @Field(() => [PhotoScalarWhereInput], {nullable:true})
    @Type(() => PhotoScalarWhereInput)
    deleteMany?: Array<PhotoScalarWhereInput>;
}
