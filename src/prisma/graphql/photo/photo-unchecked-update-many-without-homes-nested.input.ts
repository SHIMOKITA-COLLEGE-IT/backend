import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutHomesInput } from './photo-create-without-homes.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutHomesInput } from './photo-create-or-connect-without-homes.input';
import { PhotoUpsertWithWhereUniqueWithoutHomesInput } from './photo-upsert-with-where-unique-without-homes.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithWhereUniqueWithoutHomesInput } from './photo-update-with-where-unique-without-homes.input';
import { PhotoUpdateManyWithWhereWithoutHomesInput } from './photo-update-many-with-where-without-homes.input';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';

@InputType()
export class PhotoUncheckedUpdateManyWithoutHomesNestedInput {

    @Field(() => [PhotoCreateWithoutHomesInput], {nullable:true})
    @Type(() => PhotoCreateWithoutHomesInput)
    create?: Array<PhotoCreateWithoutHomesInput>;

    @Field(() => [PhotoCreateOrConnectWithoutHomesInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutHomesInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutHomesInput>;

    @Field(() => [PhotoUpsertWithWhereUniqueWithoutHomesInput], {nullable:true})
    @Type(() => PhotoUpsertWithWhereUniqueWithoutHomesInput)
    upsert?: Array<PhotoUpsertWithWhereUniqueWithoutHomesInput>;

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

    @Field(() => [PhotoUpdateWithWhereUniqueWithoutHomesInput], {nullable:true})
    @Type(() => PhotoUpdateWithWhereUniqueWithoutHomesInput)
    update?: Array<PhotoUpdateWithWhereUniqueWithoutHomesInput>;

    @Field(() => [PhotoUpdateManyWithWhereWithoutHomesInput], {nullable:true})
    @Type(() => PhotoUpdateManyWithWhereWithoutHomesInput)
    updateMany?: Array<PhotoUpdateManyWithWhereWithoutHomesInput>;

    @Field(() => [PhotoScalarWhereInput], {nullable:true})
    @Type(() => PhotoScalarWhereInput)
    deleteMany?: Array<PhotoScalarWhereInput>;
}
