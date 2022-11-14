import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SkillUncheckedCreateNestedManyWithoutParentInput } from './skill-unchecked-create-nested-many-without-parent.input';

@InputType()
export class SkillUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => SkillUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: SkillUncheckedCreateNestedManyWithoutParentInput;
}
