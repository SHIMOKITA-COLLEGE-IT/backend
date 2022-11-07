import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutMySkillsInput } from './profile-update-without-my-skills.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutMySkillsInput } from './profile-create-without-my-skills.input';

@InputType()
export class ProfileUpsertWithoutMySkillsInput {

    @Field(() => ProfileUpdateWithoutMySkillsInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutMySkillsInput)
    update!: ProfileUpdateWithoutMySkillsInput;

    @Field(() => ProfileCreateWithoutMySkillsInput, {nullable:false})
    @Type(() => ProfileCreateWithoutMySkillsInput)
    create!: ProfileCreateWithoutMySkillsInput;
}
