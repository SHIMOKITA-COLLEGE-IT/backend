import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSkillsInput } from './user-create-without-skills.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSkillsInput } from './user-create-or-connect-without-skills.input';
import { UserUpsertWithoutSkillsInput } from './user-upsert-without-skills.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSkillsInput } from './user-update-without-skills.input';

@InputType()
export class UserUpdateOneRequiredWithoutSkillsNestedInput {

    @Field(() => UserCreateWithoutSkillsInput, {nullable:true})
    @Type(() => UserCreateWithoutSkillsInput)
    create?: UserCreateWithoutSkillsInput;

    @Field(() => UserCreateOrConnectWithoutSkillsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSkillsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput;

    @Field(() => UserUpsertWithoutSkillsInput, {nullable:true})
    @Type(() => UserUpsertWithoutSkillsInput)
    upsert?: UserUpsertWithoutSkillsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSkillsInput, {nullable:true})
    @Type(() => UserUpdateWithoutSkillsInput)
    update?: UserUpdateWithoutSkillsInput;
}
