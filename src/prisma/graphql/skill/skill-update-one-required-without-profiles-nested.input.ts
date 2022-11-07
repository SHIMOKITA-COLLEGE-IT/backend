import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutProfilesInput } from './skill-create-without-profiles.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutProfilesInput } from './skill-create-or-connect-without-profiles.input';
import { SkillUpsertWithoutProfilesInput } from './skill-upsert-without-profiles.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillUpdateWithoutProfilesInput } from './skill-update-without-profiles.input';

@InputType()
export class SkillUpdateOneRequiredWithoutProfilesNestedInput {

    @Field(() => SkillCreateWithoutProfilesInput, {nullable:true})
    @Type(() => SkillCreateWithoutProfilesInput)
    create?: SkillCreateWithoutProfilesInput;

    @Field(() => SkillCreateOrConnectWithoutProfilesInput, {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: SkillCreateOrConnectWithoutProfilesInput;

    @Field(() => SkillUpsertWithoutProfilesInput, {nullable:true})
    @Type(() => SkillUpsertWithoutProfilesInput)
    upsert?: SkillUpsertWithoutProfilesInput;

    @Field(() => SkillWhereUniqueInput, {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: SkillWhereUniqueInput;

    @Field(() => SkillUpdateWithoutProfilesInput, {nullable:true})
    @Type(() => SkillUpdateWithoutProfilesInput)
    update?: SkillUpdateWithoutProfilesInput;
}
