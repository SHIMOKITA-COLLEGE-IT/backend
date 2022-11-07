import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';
import { SkillUpdateWithoutParentInput } from './skill-update-without-parent.input';

@InputType()
export class SkillUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: SkillWhereUniqueInput;

    @Field(() => SkillUpdateWithoutParentInput, {nullable:false})
    @Type(() => SkillUpdateWithoutParentInput)
    data!: SkillUpdateWithoutParentInput;
}
