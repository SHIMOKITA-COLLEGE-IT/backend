import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionUpdateInput } from './user-skill-acquisition-update.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';

@ArgsType()
export class UpdateOneUserSkillAcquisitionArgs {

    @Field(() => UserSkillAcquisitionUpdateInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUpdateInput)
    data!: UserSkillAcquisitionUpdateInput;

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;
}
