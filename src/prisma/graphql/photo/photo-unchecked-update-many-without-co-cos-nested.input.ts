import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutCoCosInput } from './photo-create-without-co-cos.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutCoCosInput } from './photo-create-or-connect-without-co-cos.input';
import { PhotoUpsertWithWhereUniqueWithoutCoCosInput } from './photo-upsert-with-where-unique-without-co-cos.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithWhereUniqueWithoutCoCosInput } from './photo-update-with-where-unique-without-co-cos.input';
import { PhotoUpdateManyWithWhereWithoutCoCosInput } from './photo-update-many-with-where-without-co-cos.input';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';

@InputType()
export class PhotoUncheckedUpdateManyWithoutCoCosNestedInput {

    @Field(() => [PhotoCreateWithoutCoCosInput], {nullable:true})
    @Type(() => PhotoCreateWithoutCoCosInput)
    create?: Array<PhotoCreateWithoutCoCosInput>;

    @Field(() => [PhotoCreateOrConnectWithoutCoCosInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutCoCosInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutCoCosInput>;

    @Field(() => [PhotoUpsertWithWhereUniqueWithoutCoCosInput], {nullable:true})
    @Type(() => PhotoUpsertWithWhereUniqueWithoutCoCosInput)
    upsert?: Array<PhotoUpsertWithWhereUniqueWithoutCoCosInput>;

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

    @Field(() => [PhotoUpdateWithWhereUniqueWithoutCoCosInput], {nullable:true})
    @Type(() => PhotoUpdateWithWhereUniqueWithoutCoCosInput)
    update?: Array<PhotoUpdateWithWhereUniqueWithoutCoCosInput>;

    @Field(() => [PhotoUpdateManyWithWhereWithoutCoCosInput], {nullable:true})
    @Type(() => PhotoUpdateManyWithWhereWithoutCoCosInput)
    updateMany?: Array<PhotoUpdateManyWithWhereWithoutCoCosInput>;

    @Field(() => [PhotoScalarWhereInput], {nullable:true})
    @Type(() => PhotoScalarWhereInput)
    deleteMany?: Array<PhotoScalarWhereInput>;
}
