import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeCreateWithoutPhotosInput } from './home-create-without-photos.input';
import { Type } from 'class-transformer';
import { HomeCreateOrConnectWithoutPhotosInput } from './home-create-or-connect-without-photos.input';
import { HomeUpsertWithWhereUniqueWithoutPhotosInput } from './home-upsert-with-where-unique-without-photos.input';
import { HomeWhereUniqueInput } from './home-where-unique.input';
import { HomeUpdateWithWhereUniqueWithoutPhotosInput } from './home-update-with-where-unique-without-photos.input';
import { HomeUpdateManyWithWhereWithoutPhotosInput } from './home-update-many-with-where-without-photos.input';
import { HomeScalarWhereInput } from './home-scalar-where.input';

@InputType()
export class HomeUpdateManyWithoutPhotosNestedInput {

    @Field(() => [HomeCreateWithoutPhotosInput], {nullable:true})
    @Type(() => HomeCreateWithoutPhotosInput)
    create?: Array<HomeCreateWithoutPhotosInput>;

    @Field(() => [HomeCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => HomeCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<HomeCreateOrConnectWithoutPhotosInput>;

    @Field(() => [HomeUpsertWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => HomeUpsertWithWhereUniqueWithoutPhotosInput)
    upsert?: Array<HomeUpsertWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    set?: Array<HomeWhereUniqueInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    disconnect?: Array<HomeWhereUniqueInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    delete?: Array<HomeWhereUniqueInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    connect?: Array<HomeWhereUniqueInput>;

    @Field(() => [HomeUpdateWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => HomeUpdateWithWhereUniqueWithoutPhotosInput)
    update?: Array<HomeUpdateWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [HomeUpdateManyWithWhereWithoutPhotosInput], {nullable:true})
    @Type(() => HomeUpdateManyWithWhereWithoutPhotosInput)
    updateMany?: Array<HomeUpdateManyWithWhereWithoutPhotosInput>;

    @Field(() => [HomeScalarWhereInput], {nullable:true})
    @Type(() => HomeScalarWhereInput)
    deleteMany?: Array<HomeScalarWhereInput>;
}
