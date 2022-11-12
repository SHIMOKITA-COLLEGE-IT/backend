import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionScalarWhereInput } from './user-skill-acquisition-scalar-where.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionUncheckedUpdateManyWithoutSkillsInput } from './user-skill-acquisition-unchecked-update-many-without-skills.input';

@InputType()
export class UserSkillAcquisitionUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserSkillAcquisitionScalarWhereInput, {nullable:false})
    @Type(() => UserSkillAcquisitionScalarWhereInput)
    where!: UserSkillAcquisitionScalarWhereInput;

    @Field(() => UserSkillAcquisitionUncheckedUpdateManyWithoutSkillsInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUncheckedUpdateManyWithoutSkillsInput)
    data!: UserSkillAcquisitionUncheckedUpdateManyWithoutSkillsInput;
}
