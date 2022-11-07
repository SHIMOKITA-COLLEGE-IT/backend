import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTagsInput } from './profile-create-without-tags.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTagsInput } from './profile-create-or-connect-without-tags.input';
import { ProfileUpsertWithWhereUniqueWithoutTagsInput } from './profile-upsert-with-where-unique-without-tags.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithWhereUniqueWithoutTagsInput } from './profile-update-with-where-unique-without-tags.input';
import { ProfileUpdateManyWithWhereWithoutTagsInput } from './profile-update-many-with-where-without-tags.input';
import { ProfileScalarWhereInput } from './profile-scalar-where.input';

@InputType()
export class ProfileUncheckedUpdateManyWithoutTagsNestedInput {

    @Field(() => [ProfileCreateWithoutTagsInput], {nullable:true})
    @Type(() => ProfileCreateWithoutTagsInput)
    create?: Array<ProfileCreateWithoutTagsInput>;

    @Field(() => [ProfileCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutTagsInput>;

    @Field(() => [ProfileUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ProfileUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutTagsInput>;

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

    @Field(() => [ProfileUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ProfileUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<ProfileUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ProfileUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => ProfileUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    @Type(() => ProfileScalarWhereInput)
    deleteMany?: Array<ProfileScalarWhereInput>;
}
