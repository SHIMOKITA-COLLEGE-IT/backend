import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateManyUserInput } from './user-skill-acquisition-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserSkillAcquisitionCreateManyUserInputEnvelope {

    @Field(() => [UserSkillAcquisitionCreateManyUserInput], {nullable:false})
    @Type(() => UserSkillAcquisitionCreateManyUserInput)
    data!: Array<UserSkillAcquisitionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
