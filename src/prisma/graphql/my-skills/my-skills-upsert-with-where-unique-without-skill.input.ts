import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Type } from 'class-transformer';
import { MySkillsUpdateWithoutSkillInput } from './my-skills-update-without-skill.input';
import { MySkillsCreateWithoutSkillInput } from './my-skills-create-without-skill.input';

@InputType()
export class MySkillsUpsertWithWhereUniqueWithoutSkillInput {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;

    @Field(() => MySkillsUpdateWithoutSkillInput, {nullable:false})
    @Type(() => MySkillsUpdateWithoutSkillInput)
    update!: MySkillsUpdateWithoutSkillInput;

    @Field(() => MySkillsCreateWithoutSkillInput, {nullable:false})
    @Type(() => MySkillsCreateWithoutSkillInput)
    create!: MySkillsCreateWithoutSkillInput;
}
