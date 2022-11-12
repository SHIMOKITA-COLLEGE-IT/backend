import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutUsersInput } from './tag-create-without-users.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutUsersInput } from './tag-create-or-connect-without-users.input';
import { TagUpsertWithWhereUniqueWithoutUsersInput } from './tag-upsert-with-where-unique-without-users.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutUsersInput } from './tag-update-with-where-unique-without-users.input';
import { TagUpdateManyWithWhereWithoutUsersInput } from './tag-update-many-with-where-without-users.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUncheckedUpdateManyWithoutUsersNestedInput {

    @Field(() => [TagCreateWithoutUsersInput], {nullable:true})
    @Type(() => TagCreateWithoutUsersInput)
    create?: Array<TagCreateWithoutUsersInput>;

    @Field(() => [TagCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutUsersInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutUsersInput>;

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

    @Field(() => [TagUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}
