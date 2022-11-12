import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';
import { SkillCreateWithoutUsersInput } from './skill-create-without-users.input';

@InputType()
export class SkillCreateOrConnectWithoutUsersInput {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: SkillWhereUniqueInput;

    @Field(() => SkillCreateWithoutUsersInput, {nullable:false})
    @Type(() => SkillCreateWithoutUsersInput)
    create!: SkillCreateWithoutUsersInput;
}
