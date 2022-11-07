import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsScalarWhereInput } from './my-skills-scalar-where.input';
import { Type } from 'class-transformer';
import { MySkillsUncheckedUpdateManyWithoutMySkillsInput } from './my-skills-unchecked-update-many-without-my-skills.input';

@InputType()
export class MySkillsUpdateManyWithWhereWithoutProfileInput {

    @Field(() => MySkillsScalarWhereInput, {nullable:false})
    @Type(() => MySkillsScalarWhereInput)
    where!: MySkillsScalarWhereInput;

    @Field(() => MySkillsUncheckedUpdateManyWithoutMySkillsInput, {nullable:false})
    @Type(() => MySkillsUncheckedUpdateManyWithoutMySkillsInput)
    data!: MySkillsUncheckedUpdateManyWithoutMySkillsInput;
}
