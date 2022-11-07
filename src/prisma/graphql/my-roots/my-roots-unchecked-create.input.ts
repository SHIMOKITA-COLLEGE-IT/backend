import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MySkillsUncheckedCreateNestedManyWithoutMyRootsInput } from '../my-skills/my-skills-unchecked-create-nested-many-without-my-roots.input';

@InputType()
export class MyRootsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    rootsId!: number;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => MySkillsUncheckedCreateNestedManyWithoutMyRootsInput, {nullable:true})
    profilesOnSkills?: MySkillsUncheckedCreateNestedManyWithoutMyRootsInput;
}
