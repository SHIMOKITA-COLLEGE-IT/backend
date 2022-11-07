import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutParentInput } from './skill-create-without-parent.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutParentInput } from './skill-create-or-connect-without-parent.input';
import { SkillUpsertWithWhereUniqueWithoutParentInput } from './skill-upsert-with-where-unique-without-parent.input';
import { SkillCreateManyParentInputEnvelope } from './skill-create-many-parent-input-envelope.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillUpdateWithWhereUniqueWithoutParentInput } from './skill-update-with-where-unique-without-parent.input';
import { SkillUpdateManyWithWhereWithoutParentInput } from './skill-update-many-with-where-without-parent.input';
import { SkillScalarWhereInput } from './skill-scalar-where.input';

@InputType()
export class SkillUncheckedUpdateManyWithoutParentNestedInput {

    @Field(() => [SkillCreateWithoutParentInput], {nullable:true})
    @Type(() => SkillCreateWithoutParentInput)
    create?: Array<SkillCreateWithoutParentInput>;

    @Field(() => [SkillCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<SkillCreateOrConnectWithoutParentInput>;

    @Field(() => [SkillUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => SkillUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<SkillUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => SkillCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => SkillCreateManyParentInputEnvelope)
    createMany?: SkillCreateManyParentInputEnvelope;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    set?: Array<SkillWhereUniqueInput>;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    disconnect?: Array<SkillWhereUniqueInput>;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    delete?: Array<SkillWhereUniqueInput>;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: Array<SkillWhereUniqueInput>;

    @Field(() => [SkillUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => SkillUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<SkillUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [SkillUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => SkillUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<SkillUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [SkillScalarWhereInput], {nullable:true})
    @Type(() => SkillScalarWhereInput)
    deleteMany?: Array<SkillScalarWhereInput>;
}
