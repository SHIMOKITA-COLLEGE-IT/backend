import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';
import { SkillCreateWithoutProfilesInput } from './skill-create-without-profiles.input';

@InputType()
export class SkillCreateOrConnectWithoutProfilesInput {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: SkillWhereUniqueInput;

    @Field(() => SkillCreateWithoutProfilesInput, {nullable:false})
    @Type(() => SkillCreateWithoutProfilesInput)
    create!: SkillCreateWithoutProfilesInput;
}
