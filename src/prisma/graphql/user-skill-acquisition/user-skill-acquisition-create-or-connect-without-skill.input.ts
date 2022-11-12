import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateWithoutSkillInput } from './user-skill-acquisition-create-without-skill.input';

@InputType()
export class UserSkillAcquisitionCreateOrConnectWithoutSkillInput {

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => UserSkillAcquisitionCreateWithoutSkillInput, {nullable:false})
    @Type(() => UserSkillAcquisitionCreateWithoutSkillInput)
    create!: UserSkillAcquisitionCreateWithoutSkillInput;
}
