import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';
import { SkillCreateWithoutParentInput } from './skill-create-without-parent.input';

@InputType()
export class SkillCreateOrConnectWithoutParentInput {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: SkillWhereUniqueInput;

    @Field(() => SkillCreateWithoutParentInput, {nullable:false})
    @Type(() => SkillCreateWithoutParentInput)
    create!: SkillCreateWithoutParentInput;
}
