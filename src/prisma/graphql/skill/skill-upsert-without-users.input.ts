import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillUpdateWithoutUsersInput } from './skill-update-without-users.input';
import { Type } from 'class-transformer';
import { SkillCreateWithoutUsersInput } from './skill-create-without-users.input';

@InputType()
export class SkillUpsertWithoutUsersInput {

    @Field(() => SkillUpdateWithoutUsersInput, {nullable:false})
    @Type(() => SkillUpdateWithoutUsersInput)
    update!: SkillUpdateWithoutUsersInput;

    @Field(() => SkillCreateWithoutUsersInput, {nullable:false})
    @Type(() => SkillCreateWithoutUsersInput)
    create!: SkillCreateWithoutUsersInput;
}
