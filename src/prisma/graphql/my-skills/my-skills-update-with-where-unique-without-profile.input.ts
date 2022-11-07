import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Type } from 'class-transformer';
import { MySkillsUpdateWithoutProfileInput } from './my-skills-update-without-profile.input';

@InputType()
export class MySkillsUpdateWithWhereUniqueWithoutProfileInput {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;

    @Field(() => MySkillsUpdateWithoutProfileInput, {nullable:false})
    @Type(() => MySkillsUpdateWithoutProfileInput)
    data!: MySkillsUpdateWithoutProfileInput;
}
