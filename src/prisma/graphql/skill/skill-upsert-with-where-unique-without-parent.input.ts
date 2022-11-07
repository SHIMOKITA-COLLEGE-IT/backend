import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';
import { SkillUpdateWithoutParentInput } from './skill-update-without-parent.input';
import { SkillCreateWithoutParentInput } from './skill-create-without-parent.input';

@InputType()
export class SkillUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: SkillWhereUniqueInput;

    @Field(() => SkillUpdateWithoutParentInput, {nullable:false})
    @Type(() => SkillUpdateWithoutParentInput)
    update!: SkillUpdateWithoutParentInput;

    @Field(() => SkillCreateWithoutParentInput, {nullable:false})
    @Type(() => SkillCreateWithoutParentInput)
    create!: SkillCreateWithoutParentInput;
}
