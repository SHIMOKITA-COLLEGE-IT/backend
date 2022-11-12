import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionScalarWhereInput } from './user-skill-acquisition-scalar-where.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionUncheckedUpdateManyWithoutUserSkillAcquisitionsInput } from './user-skill-acquisition-unchecked-update-many-without-user-skill-acquisitions.input';

@InputType()
export class UserSkillAcquisitionUpdateManyWithWhereWithoutUserRootsTracingInput {

    @Field(() => UserSkillAcquisitionScalarWhereInput, {nullable:false})
    @Type(() => UserSkillAcquisitionScalarWhereInput)
    where!: UserSkillAcquisitionScalarWhereInput;

    @Field(() => UserSkillAcquisitionUncheckedUpdateManyWithoutUserSkillAcquisitionsInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUncheckedUpdateManyWithoutUserSkillAcquisitionsInput)
    data!: UserSkillAcquisitionUncheckedUpdateManyWithoutUserSkillAcquisitionsInput;
}
