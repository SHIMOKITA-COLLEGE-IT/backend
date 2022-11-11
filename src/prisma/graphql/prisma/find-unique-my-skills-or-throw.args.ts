import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from '../my-skills/my-skills-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMySkillsOrThrowArgs {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;
}
