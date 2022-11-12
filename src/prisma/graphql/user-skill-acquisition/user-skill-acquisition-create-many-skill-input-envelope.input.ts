import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateManySkillInput } from './user-skill-acquisition-create-many-skill.input';
import { Type } from 'class-transformer';

@InputType()
export class UserSkillAcquisitionCreateManySkillInputEnvelope {

    @Field(() => [UserSkillAcquisitionCreateManySkillInput], {nullable:false})
    @Type(() => UserSkillAcquisitionCreateManySkillInput)
    data!: Array<UserSkillAcquisitionCreateManySkillInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
