import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Type } from 'class-transformer';
import { MySkillsCreateWithoutProfileInput } from './my-skills-create-without-profile.input';

@InputType()
export class MySkillsCreateOrConnectWithoutProfileInput {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;

    @Field(() => MySkillsCreateWithoutProfileInput, {nullable:false})
    @Type(() => MySkillsCreateWithoutProfileInput)
    create!: MySkillsCreateWithoutProfileInput;
}
