import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutUsersInput } from './skill-create-without-users.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutUsersInput } from './skill-create-or-connect-without-users.input';
import { SkillUpsertWithoutUsersInput } from './skill-upsert-without-users.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillUpdateWithoutUsersInput } from './skill-update-without-users.input';

@InputType()
export class SkillUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => SkillCreateWithoutUsersInput, {nullable:true})
    @Type(() => SkillCreateWithoutUsersInput)
    create?: SkillCreateWithoutUsersInput;

    @Field(() => SkillCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutUsersInput)
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput;

    @Field(() => SkillUpsertWithoutUsersInput, {nullable:true})
    @Type(() => SkillUpsertWithoutUsersInput)
    upsert?: SkillUpsertWithoutUsersInput;

    @Field(() => SkillWhereUniqueInput, {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: SkillWhereUniqueInput;

    @Field(() => SkillUpdateWithoutUsersInput, {nullable:true})
    @Type(() => SkillUpdateWithoutUsersInput)
    update?: SkillUpdateWithoutUsersInput;
}
