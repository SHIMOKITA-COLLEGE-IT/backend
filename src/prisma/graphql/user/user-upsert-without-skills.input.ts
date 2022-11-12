import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSkillsInput } from './user-update-without-skills.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSkillsInput } from './user-create-without-skills.input';

@InputType()
export class UserUpsertWithoutSkillsInput {

    @Field(() => UserUpdateWithoutSkillsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSkillsInput)
    update!: UserUpdateWithoutSkillsInput;

    @Field(() => UserCreateWithoutSkillsInput, {nullable:false})
    @Type(() => UserCreateWithoutSkillsInput)
    create!: UserCreateWithoutSkillsInput;
}
