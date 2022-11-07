import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Type } from 'class-transformer';
import { MySkillsUpdateWithoutProfileInput } from './my-skills-update-without-profile.input';
import { MySkillsCreateWithoutProfileInput } from './my-skills-create-without-profile.input';

@InputType()
export class MySkillsUpsertWithWhereUniqueWithoutProfileInput {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;

    @Field(() => MySkillsUpdateWithoutProfileInput, {nullable:false})
    @Type(() => MySkillsUpdateWithoutProfileInput)
    update!: MySkillsUpdateWithoutProfileInput;

    @Field(() => MySkillsCreateWithoutProfileInput, {nullable:false})
    @Type(() => MySkillsCreateWithoutProfileInput)
    create!: MySkillsCreateWithoutProfileInput;
}
