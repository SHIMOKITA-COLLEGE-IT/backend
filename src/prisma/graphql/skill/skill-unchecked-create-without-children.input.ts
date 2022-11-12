import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserSkillAcquisitionUncheckedCreateNestedManyWithoutSkillInput } from '../user-skill-acquisition/user-skill-acquisition-unchecked-create-nested-many-without-skill.input';

@InputType()
export class SkillUncheckedCreateWithoutChildrenInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => UserSkillAcquisitionUncheckedCreateNestedManyWithoutSkillInput, {nullable:true})
    users?: UserSkillAcquisitionUncheckedCreateNestedManyWithoutSkillInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
