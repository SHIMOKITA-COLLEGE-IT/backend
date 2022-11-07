import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutPhotosInput } from './profile-create-without-photos.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutPhotosInput } from './profile-create-or-connect-without-photos.input';
import { ProfileUpsertWithWhereUniqueWithoutPhotosInput } from './profile-upsert-with-where-unique-without-photos.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithWhereUniqueWithoutPhotosInput } from './profile-update-with-where-unique-without-photos.input';
import { ProfileUpdateManyWithWhereWithoutPhotosInput } from './profile-update-many-with-where-without-photos.input';
import { ProfileScalarWhereInput } from './profile-scalar-where.input';

@InputType()
export class ProfileUncheckedUpdateManyWithoutPhotosNestedInput {

    @Field(() => [ProfileCreateWithoutPhotosInput], {nullable:true})
    @Type(() => ProfileCreateWithoutPhotosInput)
    create?: Array<ProfileCreateWithoutPhotosInput>;

    @Field(() => [ProfileCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutPhotosInput>;

    @Field(() => [ProfileUpsertWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => ProfileUpsertWithWhereUniqueWithoutPhotosInput)
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    set?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    disconnect?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    delete?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileUpdateWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => ProfileUpdateWithWhereUniqueWithoutPhotosInput)
    update?: Array<ProfileUpdateWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [ProfileUpdateManyWithWhereWithoutPhotosInput], {nullable:true})
    @Type(() => ProfileUpdateManyWithWhereWithoutPhotosInput)
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutPhotosInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    @Type(() => ProfileScalarWhereInput)
    deleteMany?: Array<ProfileScalarWhereInput>;
}
