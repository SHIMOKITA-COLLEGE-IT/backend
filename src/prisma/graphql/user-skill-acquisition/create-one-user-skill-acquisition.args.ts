import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateInput } from './user-skill-acquisition-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserSkillAcquisitionArgs {

    @Field(() => UserSkillAcquisitionCreateInput, {nullable:false})
    @Type(() => UserSkillAcquisitionCreateInput)
    data!: UserSkillAcquisitionCreateInput;
}
