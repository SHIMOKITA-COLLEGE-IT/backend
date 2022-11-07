import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoCreateWithoutPhotosInput } from './co-co-create-without-photos.input';
import { Type } from 'class-transformer';
import { CoCoCreateOrConnectWithoutPhotosInput } from './co-co-create-or-connect-without-photos.input';
import { CoCoUpsertWithWhereUniqueWithoutPhotosInput } from './co-co-upsert-with-where-unique-without-photos.input';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { CoCoUpdateWithWhereUniqueWithoutPhotosInput } from './co-co-update-with-where-unique-without-photos.input';
import { CoCoUpdateManyWithWhereWithoutPhotosInput } from './co-co-update-many-with-where-without-photos.input';
import { CoCoScalarWhereInput } from './co-co-scalar-where.input';

@InputType()
export class CoCoUncheckedUpdateManyWithoutPhotosNestedInput {

    @Field(() => [CoCoCreateWithoutPhotosInput], {nullable:true})
    @Type(() => CoCoCreateWithoutPhotosInput)
    create?: Array<CoCoCreateWithoutPhotosInput>;

    @Field(() => [CoCoCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => CoCoCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<CoCoCreateOrConnectWithoutPhotosInput>;

    @Field(() => [CoCoUpsertWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => CoCoUpsertWithWhereUniqueWithoutPhotosInput)
    upsert?: Array<CoCoUpsertWithWhereUniqueWithoutPhotosInput>;

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

    @Field(() => [CoCoUpdateWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => CoCoUpdateWithWhereUniqueWithoutPhotosInput)
    update?: Array<CoCoUpdateWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [CoCoUpdateManyWithWhereWithoutPhotosInput], {nullable:true})
    @Type(() => CoCoUpdateManyWithWhereWithoutPhotosInput)
    updateMany?: Array<CoCoUpdateManyWithWhereWithoutPhotosInput>;

    @Field(() => [CoCoScalarWhereInput], {nullable:true})
    @Type(() => CoCoScalarWhereInput)
    deleteMany?: Array<CoCoScalarWhereInput>;
}
