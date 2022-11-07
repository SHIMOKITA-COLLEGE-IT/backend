import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateNestedOneWithoutChildrenInput } from './skill-create-nested-one-without-children.input';
import { MySkillsCreateNestedManyWithoutSkillInput } from '../my-skills/my-skills-create-nested-many-without-skill.input';

@InputType()
export class SkillCreateWithoutChildrenInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SkillCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: SkillCreateNestedOneWithoutChildrenInput;

    @Field(() => MySkillsCreateNestedManyWithoutSkillInput, {nullable:true})
    profiles?: MySkillsCreateNestedManyWithoutSkillInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
