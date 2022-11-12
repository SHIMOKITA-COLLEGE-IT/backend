import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionUncheckedUpdateManyInput } from './user-skill-acquisition-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionWhereInput } from './user-skill-acquisition-where.input';

@ArgsType()
export class UpdateManyUserSkillAcquisitionArgs {

    @Field(() => UserSkillAcquisitionUncheckedUpdateManyInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUncheckedUpdateManyInput)
    data!: UserSkillAcquisitionUncheckedUpdateManyInput;

    @Field(() => UserSkillAcquisitionWhereInput, {nullable:true})
    @Type(() => UserSkillAcquisitionWhereInput)
    where?: UserSkillAcquisitionWhereInput;
}
