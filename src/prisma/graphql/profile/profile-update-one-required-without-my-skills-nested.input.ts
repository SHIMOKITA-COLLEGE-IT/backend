import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMySkillsInput } from './profile-create-without-my-skills.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutMySkillsInput } from './profile-create-or-connect-without-my-skills.input';
import { ProfileUpsertWithoutMySkillsInput } from './profile-upsert-without-my-skills.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutMySkillsInput } from './profile-update-without-my-skills.input';

@InputType()
export class ProfileUpdateOneRequiredWithoutMySkillsNestedInput {

    @Field(() => ProfileCreateWithoutMySkillsInput, {nullable:true})
    @Type(() => ProfileCreateWithoutMySkillsInput)
    create?: ProfileCreateWithoutMySkillsInput;

    @Field(() => ProfileCreateOrConnectWithoutMySkillsInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutMySkillsInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutMySkillsInput;

    @Field(() => ProfileUpsertWithoutMySkillsInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutMySkillsInput)
    upsert?: ProfileUpsertWithoutMySkillsInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutMySkillsInput, {nullable:true})
    @Type(() => ProfileUpdateWithoutMySkillsInput)
    update?: ProfileUpdateWithoutMySkillsInput;
}
