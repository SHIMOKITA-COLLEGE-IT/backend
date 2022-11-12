import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutUsersInput } from './skill-create-without-users.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutUsersInput } from './skill-create-or-connect-without-users.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@InputType()
export class SkillCreateNestedOneWithoutUsersInput {

    @Field(() => SkillCreateWithoutUsersInput, {nullable:true})
    @Type(() => SkillCreateWithoutUsersInput)
    create?: SkillCreateWithoutUsersInput;

    @Field(() => SkillCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutUsersInput)
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput;

    @Field(() => SkillWhereUniqueInput, {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: SkillWhereUniqueInput;
}
