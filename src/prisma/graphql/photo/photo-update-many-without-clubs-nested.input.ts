import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutClubsInput } from './photo-create-without-clubs.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutClubsInput } from './photo-create-or-connect-without-clubs.input';
import { PhotoUpsertWithWhereUniqueWithoutClubsInput } from './photo-upsert-with-where-unique-without-clubs.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithWhereUniqueWithoutClubsInput } from './photo-update-with-where-unique-without-clubs.input';
import { PhotoUpdateManyWithWhereWithoutClubsInput } from './photo-update-many-with-where-without-clubs.input';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';

@InputType()
export class PhotoUpdateManyWithoutClubsNestedInput {

    @Field(() => [PhotoCreateWithoutClubsInput], {nullable:true})
    @Type(() => PhotoCreateWithoutClubsInput)
    create?: Array<PhotoCreateWithoutClubsInput>;

    @Field(() => [PhotoCreateOrConnectWithoutClubsInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutClubsInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutClubsInput>;

    @Field(() => [PhotoUpsertWithWhereUniqueWithoutClubsInput], {nullable:true})
    @Type(() => PhotoUpsertWithWhereUniqueWithoutClubsInput)
    upsert?: Array<PhotoUpsertWithWhereUniqueWithoutClubsInput>;

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

    @Field(() => [PhotoUpdateWithWhereUniqueWithoutClubsInput], {nullable:true})
    @Type(() => PhotoUpdateWithWhereUniqueWithoutClubsInput)
    update?: Array<PhotoUpdateWithWhereUniqueWithoutClubsInput>;

    @Field(() => [PhotoUpdateManyWithWhereWithoutClubsInput], {nullable:true})
    @Type(() => PhotoUpdateManyWithWhereWithoutClubsInput)
    updateMany?: Array<PhotoUpdateManyWithWhereWithoutClubsInput>;

    @Field(() => [PhotoScalarWhereInput], {nullable:true})
    @Type(() => PhotoScalarWhereInput)
    deleteMany?: Array<PhotoScalarWhereInput>;
}
