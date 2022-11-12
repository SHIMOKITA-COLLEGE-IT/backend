import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionUpdateWithoutSkillInput } from './user-skill-acquisition-update-without-skill.input';

@InputType()
export class UserSkillAcquisitionUpdateWithWhereUniqueWithoutSkillInput {

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => UserSkillAcquisitionUpdateWithoutSkillInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUpdateWithoutSkillInput)
    data!: UserSkillAcquisitionUpdateWithoutSkillInput;
}
