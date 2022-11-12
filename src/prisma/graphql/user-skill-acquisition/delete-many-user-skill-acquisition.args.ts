import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereInput } from './user-skill-acquisition-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserSkillAcquisitionArgs {

    @Field(() => UserSkillAcquisitionWhereInput, {nullable:true})
    @Type(() => UserSkillAcquisitionWhereInput)
    where?: UserSkillAcquisitionWhereInput;
}
