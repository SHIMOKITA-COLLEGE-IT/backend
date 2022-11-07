import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsScalarWhereInput } from './my-skills-scalar-where.input';
import { Type } from 'class-transformer';
import { MySkillsUncheckedUpdateManyWithoutProfilesInput } from './my-skills-unchecked-update-many-without-profiles.input';

@InputType()
export class MySkillsUpdateManyWithWhereWithoutSkillInput {

    @Field(() => MySkillsScalarWhereInput, {nullable:false})
    @Type(() => MySkillsScalarWhereInput)
    where!: MySkillsScalarWhereInput;

    @Field(() => MySkillsUncheckedUpdateManyWithoutProfilesInput, {nullable:false})
    @Type(() => MySkillsUncheckedUpdateManyWithoutProfilesInput)
    data!: MySkillsUncheckedUpdateManyWithoutProfilesInput;
}
