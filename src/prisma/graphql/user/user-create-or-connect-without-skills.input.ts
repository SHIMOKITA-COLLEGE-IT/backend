import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSkillsInput } from './user-create-without-skills.input';

@InputType()
export class UserCreateOrConnectWithoutSkillsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSkillsInput, {nullable:false})
    @Type(() => UserCreateWithoutSkillsInput)
    create!: UserCreateWithoutSkillsInput;
}
