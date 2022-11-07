import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMySkillsInput } from './profile-create-without-my-skills.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutMySkillsInput } from './profile-create-or-connect-without-my-skills.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutMySkillsInput {

    @Field(() => ProfileCreateWithoutMySkillsInput, {nullable:true})
    @Type(() => ProfileCreateWithoutMySkillsInput)
    create?: ProfileCreateWithoutMySkillsInput;

    @Field(() => ProfileCreateOrConnectWithoutMySkillsInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutMySkillsInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutMySkillsInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: ProfileWhereUniqueInput;
}
