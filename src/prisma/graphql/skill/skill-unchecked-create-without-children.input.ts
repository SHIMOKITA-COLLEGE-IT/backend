import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MySkillsUncheckedCreateNestedManyWithoutSkillInput } from '../my-skills/my-skills-unchecked-create-nested-many-without-skill.input';

@InputType()
export class SkillUncheckedCreateWithoutChildrenInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => MySkillsUncheckedCreateNestedManyWithoutSkillInput, {nullable:true})
    profiles?: MySkillsUncheckedCreateNestedManyWithoutSkillInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
