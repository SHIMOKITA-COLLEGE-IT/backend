import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsScalarWhereInput } from './my-skills-scalar-where.input';
import { Type } from 'class-transformer';
import { MySkillsUncheckedUpdateManyWithoutProfilesOnSkillsInput } from './my-skills-unchecked-update-many-without-profiles-on-skills.input';

@InputType()
export class MySkillsUpdateManyWithWhereWithoutMyRootsInput {

    @Field(() => MySkillsScalarWhereInput, {nullable:false})
    @Type(() => MySkillsScalarWhereInput)
    where!: MySkillsScalarWhereInput;

    @Field(() => MySkillsUncheckedUpdateManyWithoutProfilesOnSkillsInput, {nullable:false})
    @Type(() => MySkillsUncheckedUpdateManyWithoutProfilesOnSkillsInput)
    data!: MySkillsUncheckedUpdateManyWithoutProfilesOnSkillsInput;
}
