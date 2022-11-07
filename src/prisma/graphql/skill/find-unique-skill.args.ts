import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSkillArgs {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: SkillWhereUniqueInput;
}
