import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SkillUncheckedCreateNestedManyWithoutParentInput } from './skill-unchecked-create-nested-many-without-parent.input';
import { UserSkillAcquisitionUncheckedCreateNestedManyWithoutSkillInput } from '../user-skill-acquisition/user-skill-acquisition-unchecked-create-nested-many-without-skill.input';

@InputType()
export class SkillUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => SkillUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: SkillUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => UserSkillAcquisitionUncheckedCreateNestedManyWithoutSkillInput, {nullable:true})
    users?: UserSkillAcquisitionUncheckedCreateNestedManyWithoutSkillInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
