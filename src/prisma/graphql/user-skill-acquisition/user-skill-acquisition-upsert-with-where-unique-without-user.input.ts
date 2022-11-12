import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionUpdateWithoutUserInput } from './user-skill-acquisition-update-without-user.input';
import { UserSkillAcquisitionCreateWithoutUserInput } from './user-skill-acquisition-create-without-user.input';

@InputType()
export class UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => UserSkillAcquisitionUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUpdateWithoutUserInput)
    update!: UserSkillAcquisitionUpdateWithoutUserInput;

    @Field(() => UserSkillAcquisitionCreateWithoutUserInput, {nullable:false})
    @Type(() => UserSkillAcquisitionCreateWithoutUserInput)
    create!: UserSkillAcquisitionCreateWithoutUserInput;
}
