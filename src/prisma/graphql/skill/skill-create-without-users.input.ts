import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateNestedOneWithoutChildrenInput } from './skill-create-nested-one-without-children.input';
import { SkillCreateNestedManyWithoutParentInput } from './skill-create-nested-many-without-parent.input';

@InputType()
export class SkillCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SkillCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: SkillCreateNestedOneWithoutChildrenInput;

    @Field(() => SkillCreateNestedManyWithoutParentInput, {nullable:true})
    children?: SkillCreateNestedManyWithoutParentInput;
}
