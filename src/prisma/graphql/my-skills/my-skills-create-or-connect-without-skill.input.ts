import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Type } from 'class-transformer';
import { MySkillsCreateWithoutSkillInput } from './my-skills-create-without-skill.input';

@InputType()
export class MySkillsCreateOrConnectWithoutSkillInput {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;

    @Field(() => MySkillsCreateWithoutSkillInput, {nullable:false})
    @Type(() => MySkillsCreateWithoutSkillInput)
    create!: MySkillsCreateWithoutSkillInput;
}
