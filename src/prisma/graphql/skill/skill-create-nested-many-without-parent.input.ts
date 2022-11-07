import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutParentInput } from './skill-create-without-parent.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutParentInput } from './skill-create-or-connect-without-parent.input';
import { SkillCreateManyParentInputEnvelope } from './skill-create-many-parent-input-envelope.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@InputType()
export class SkillCreateNestedManyWithoutParentInput {

    @Field(() => [SkillCreateWithoutParentInput], {nullable:true})
    @Type(() => SkillCreateWithoutParentInput)
    create?: Array<SkillCreateWithoutParentInput>;

    @Field(() => [SkillCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<SkillCreateOrConnectWithoutParentInput>;

    @Field(() => SkillCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => SkillCreateManyParentInputEnvelope)
    createMany?: SkillCreateManyParentInputEnvelope;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: Array<SkillWhereUniqueInput>;
}
