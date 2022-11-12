import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateNestedOneWithoutChildrenInput } from './skill-create-nested-one-without-children.input';
import { UserSkillAcquisitionCreateNestedManyWithoutSkillInput } from '../user-skill-acquisition/user-skill-acquisition-create-nested-many-without-skill.input';

@InputType()
export class SkillCreateWithoutChildrenInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SkillCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: SkillCreateNestedOneWithoutChildrenInput;

    @Field(() => UserSkillAcquisitionCreateNestedManyWithoutSkillInput, {nullable:true})
    users?: UserSkillAcquisitionCreateNestedManyWithoutSkillInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
