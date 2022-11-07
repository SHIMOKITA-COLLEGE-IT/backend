import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillUpdateWithoutProfilesInput } from './skill-update-without-profiles.input';
import { Type } from 'class-transformer';
import { SkillCreateWithoutProfilesInput } from './skill-create-without-profiles.input';

@InputType()
export class SkillUpsertWithoutProfilesInput {

    @Field(() => SkillUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => SkillUpdateWithoutProfilesInput)
    update!: SkillUpdateWithoutProfilesInput;

    @Field(() => SkillCreateWithoutProfilesInput, {nullable:false})
    @Type(() => SkillCreateWithoutProfilesInput)
    create!: SkillCreateWithoutProfilesInput;
}
