import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutProfilesInput } from './photo-create-without-profiles.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutProfilesInput } from './photo-create-or-connect-without-profiles.input';
import { PhotoUpsertWithWhereUniqueWithoutProfilesInput } from './photo-upsert-with-where-unique-without-profiles.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithWhereUniqueWithoutProfilesInput } from './photo-update-with-where-unique-without-profiles.input';
import { PhotoUpdateManyWithWhereWithoutProfilesInput } from './photo-update-many-with-where-without-profiles.input';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';

@InputType()
export class PhotoUncheckedUpdateManyWithoutProfilesNestedInput {

    @Field(() => [PhotoCreateWithoutProfilesInput], {nullable:true})
    @Type(() => PhotoCreateWithoutProfilesInput)
    create?: Array<PhotoCreateWithoutProfilesInput>;

    @Field(() => [PhotoCreateOrConnectWithoutProfilesInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutProfilesInput>;

    @Field(() => [PhotoUpsertWithWhereUniqueWithoutProfilesInput], {nullable:true})
    @Type(() => PhotoUpsertWithWhereUniqueWithoutProfilesInput)
    upsert?: Array<PhotoUpsertWithWhereUniqueWithoutProfilesInput>;

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

    @Field(() => [PhotoUpdateWithWhereUniqueWithoutProfilesInput], {nullable:true})
    @Type(() => PhotoUpdateWithWhereUniqueWithoutProfilesInput)
    update?: Array<PhotoUpdateWithWhereUniqueWithoutProfilesInput>;

    @Field(() => [PhotoUpdateManyWithWhereWithoutProfilesInput], {nullable:true})
    @Type(() => PhotoUpdateManyWithWhereWithoutProfilesInput)
    updateMany?: Array<PhotoUpdateManyWithWhereWithoutProfilesInput>;

    @Field(() => [PhotoScalarWhereInput], {nullable:true})
    @Type(() => PhotoScalarWhereInput)
    deleteMany?: Array<PhotoScalarWhereInput>;
}
