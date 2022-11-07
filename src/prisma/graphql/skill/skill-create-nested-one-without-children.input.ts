import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutChildrenInput } from './skill-create-without-children.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutChildrenInput } from './skill-create-or-connect-without-children.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@InputType()
export class SkillCreateNestedOneWithoutChildrenInput {

    @Field(() => SkillCreateWithoutChildrenInput, {nullable:true})
    @Type(() => SkillCreateWithoutChildrenInput)
    create?: SkillCreateWithoutChildrenInput;

    @Field(() => SkillCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: SkillCreateOrConnectWithoutChildrenInput;

    @Field(() => SkillWhereUniqueInput, {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: SkillWhereUniqueInput;
}
