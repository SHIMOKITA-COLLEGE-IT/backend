import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutChildrenInput } from './skill-create-without-children.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutChildrenInput } from './skill-create-or-connect-without-children.input';
import { SkillUpsertWithoutChildrenInput } from './skill-upsert-without-children.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillUpdateWithoutChildrenInput } from './skill-update-without-children.input';

@InputType()
export class SkillUpdateOneWithoutChildrenNestedInput {

    @Field(() => SkillCreateWithoutChildrenInput, {nullable:true})
    @Type(() => SkillCreateWithoutChildrenInput)
    create?: SkillCreateWithoutChildrenInput;

    @Field(() => SkillCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: SkillCreateOrConnectWithoutChildrenInput;

    @Field(() => SkillUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => SkillUpsertWithoutChildrenInput)
    upsert?: SkillUpsertWithoutChildrenInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SkillWhereUniqueInput, {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: SkillWhereUniqueInput;

    @Field(() => SkillUpdateWithoutChildrenInput, {nullable:true})
    @Type(() => SkillUpdateWithoutChildrenInput)
    update?: SkillUpdateWithoutChildrenInput;
}
