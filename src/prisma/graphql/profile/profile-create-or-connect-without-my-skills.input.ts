import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutMySkillsInput } from './profile-create-without-my-skills.input';

@InputType()
export class ProfileCreateOrConnectWithoutMySkillsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutMySkillsInput, {nullable:false})
    @Type(() => ProfileCreateWithoutMySkillsInput)
    create!: ProfileCreateWithoutMySkillsInput;
}
