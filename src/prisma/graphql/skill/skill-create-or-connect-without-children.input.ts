import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';
import { SkillCreateWithoutChildrenInput } from './skill-create-without-children.input';

@InputType()
export class SkillCreateOrConnectWithoutChildrenInput {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: SkillWhereUniqueInput;

    @Field(() => SkillCreateWithoutChildrenInput, {nullable:false})
    @Type(() => SkillCreateWithoutChildrenInput)
    create!: SkillCreateWithoutChildrenInput;
}
