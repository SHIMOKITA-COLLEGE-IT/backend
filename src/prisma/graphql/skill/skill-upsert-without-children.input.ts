import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillUpdateWithoutChildrenInput } from './skill-update-without-children.input';
import { Type } from 'class-transformer';
import { SkillCreateWithoutChildrenInput } from './skill-create-without-children.input';

@InputType()
export class SkillUpsertWithoutChildrenInput {

    @Field(() => SkillUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => SkillUpdateWithoutChildrenInput)
    update!: SkillUpdateWithoutChildrenInput;

    @Field(() => SkillCreateWithoutChildrenInput, {nullable:false})
    @Type(() => SkillCreateWithoutChildrenInput)
    create!: SkillCreateWithoutChildrenInput;
}
