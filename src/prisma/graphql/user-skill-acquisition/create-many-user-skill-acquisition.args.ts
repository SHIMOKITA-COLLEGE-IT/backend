import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateManyInput } from './user-skill-acquisition-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserSkillAcquisitionArgs {

    @Field(() => [UserSkillAcquisitionCreateManyInput], {nullable:false})
    @Type(() => UserSkillAcquisitionCreateManyInput)
    data!: Array<UserSkillAcquisitionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
