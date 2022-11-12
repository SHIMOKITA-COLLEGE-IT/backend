import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionScalarWhereInput } from './user-skill-acquisition-scalar-where.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionUncheckedUpdateManyWithoutUsersInput } from './user-skill-acquisition-unchecked-update-many-without-users.input';

@InputType()
export class UserSkillAcquisitionUpdateManyWithWhereWithoutSkillInput {

    @Field(() => UserSkillAcquisitionScalarWhereInput, {nullable:false})
    @Type(() => UserSkillAcquisitionScalarWhereInput)
    where!: UserSkillAcquisitionScalarWhereInput;

    @Field(() => UserSkillAcquisitionUncheckedUpdateManyWithoutUsersInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUncheckedUpdateManyWithoutUsersInput)
    data!: UserSkillAcquisitionUncheckedUpdateManyWithoutUsersInput;
}
