import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSkillsInput } from './user-create-without-skills.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSkillsInput } from './user-create-or-connect-without-skills.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSkillsInput {

    @Field(() => UserCreateWithoutSkillsInput, {nullable:true})
    @Type(() => UserCreateWithoutSkillsInput)
    create?: UserCreateWithoutSkillsInput;

    @Field(() => UserCreateOrConnectWithoutSkillsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSkillsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
