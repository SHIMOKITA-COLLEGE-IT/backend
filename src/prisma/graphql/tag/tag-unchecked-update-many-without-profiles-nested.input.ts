import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutProfilesInput } from './tag-create-without-profiles.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutProfilesInput } from './tag-create-or-connect-without-profiles.input';
import { TagUpsertWithWhereUniqueWithoutProfilesInput } from './tag-upsert-with-where-unique-without-profiles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutProfilesInput } from './tag-update-with-where-unique-without-profiles.input';
import { TagUpdateManyWithWhereWithoutProfilesInput } from './tag-update-many-with-where-without-profiles.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUncheckedUpdateManyWithoutProfilesNestedInput {

    @Field(() => [TagCreateWithoutProfilesInput], {nullable:true})
    @Type(() => TagCreateWithoutProfilesInput)
    create?: Array<TagCreateWithoutProfilesInput>;

    @Field(() => [TagCreateOrConnectWithoutProfilesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutProfilesInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutProfilesInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutProfilesInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutProfilesInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutProfilesInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutProfilesInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutProfilesInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutProfilesInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutProfilesInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutProfilesInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}
