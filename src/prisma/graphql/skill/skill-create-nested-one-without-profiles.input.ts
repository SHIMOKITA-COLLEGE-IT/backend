import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutProfilesInput } from './skill-create-without-profiles.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutProfilesInput } from './skill-create-or-connect-without-profiles.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@InputType()
export class SkillCreateNestedOneWithoutProfilesInput {

    @Field(() => SkillCreateWithoutProfilesInput, {nullable:true})
    @Type(() => SkillCreateWithoutProfilesInput)
    create?: SkillCreateWithoutProfilesInput;

    @Field(() => SkillCreateOrConnectWithoutProfilesInput, {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: SkillCreateOrConnectWithoutProfilesInput;

    @Field(() => SkillWhereUniqueInput, {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: SkillWhereUniqueInput;
}
