import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillWhereInput } from './skill-where.input';

@InputType()
export class SkillRelationFilter {

    @Field(() => SkillWhereInput, {nullable:true})
    is?: SkillWhereInput;

    @Field(() => SkillWhereInput, {nullable:true})
    isNot?: SkillWhereInput;
}
