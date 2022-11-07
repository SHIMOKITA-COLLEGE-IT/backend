import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateNestedManyWithoutParentInput } from './skill-create-nested-many-without-parent.input';
import { MySkillsCreateNestedManyWithoutSkillInput } from '../my-skills/my-skills-create-nested-many-without-skill.input';

@InputType()
export class SkillCreateWithoutParentInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SkillCreateNestedManyWithoutParentInput, {nullable:true})
    children?: SkillCreateNestedManyWithoutParentInput;

    @Field(() => MySkillsCreateNestedManyWithoutSkillInput, {nullable:true})
    profiles?: MySkillsCreateNestedManyWithoutSkillInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
