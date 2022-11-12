import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateInput } from './user-skill-acquisition-create.input';
import { UserSkillAcquisitionUpdateInput } from './user-skill-acquisition-update.input';

@ArgsType()
export class UpsertOneUserSkillAcquisitionArgs {

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => UserSkillAcquisitionCreateInput, {nullable:false})
    @Type(() => UserSkillAcquisitionCreateInput)
    create!: UserSkillAcquisitionCreateInput;

    @Field(() => UserSkillAcquisitionUpdateInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUpdateInput)
    update!: UserSkillAcquisitionUpdateInput;
}
