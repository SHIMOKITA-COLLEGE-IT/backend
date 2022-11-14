import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateNestedManyWithoutParentInput } from './skill-create-nested-many-without-parent.input';
import { UserSkillAcquisitionCreateNestedManyWithoutSkillInput } from '../user-skill-acquisition/user-skill-acquisition-create-nested-many-without-skill.input';

@InputType()
export class SkillCreateWithoutParentInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SkillCreateNestedManyWithoutParentInput, {nullable:true})
    children?: SkillCreateNestedManyWithoutParentInput;

    @Field(() => UserSkillAcquisitionCreateNestedManyWithoutSkillInput, {nullable:true})
    users?: UserSkillAcquisitionCreateNestedManyWithoutSkillInput;
}
