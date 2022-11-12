import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionUpdateWithoutUserInput } from './user-skill-acquisition-update-without-user.input';

@InputType()
export class UserSkillAcquisitionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => UserSkillAcquisitionUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUpdateWithoutUserInput)
    data!: UserSkillAcquisitionUpdateWithoutUserInput;
}
