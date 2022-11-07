import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { SkillRelationFilter } from './skill-relation-filter.input';
import { SkillListRelationFilter } from './skill-list-relation-filter.input';
import { MySkillsListRelationFilter } from '../my-skills/my-skills-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SkillWhereInput {

    @Field(() => [SkillWhereInput], {nullable:true})
    AND?: Array<SkillWhereInput>;

    @Field(() => [SkillWhereInput], {nullable:true})
    OR?: Array<SkillWhereInput>;

    @Field(() => [SkillWhereInput], {nullable:true})
    NOT?: Array<SkillWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parentId?: IntNullableFilter;

    @Field(() => SkillRelationFilter, {nullable:true})
    parent?: SkillRelationFilter;

    @Field(() => SkillListRelationFilter, {nullable:true})
    children?: SkillListRelationFilter;

    @Field(() => MySkillsListRelationFilter, {nullable:true})
    profiles?: MySkillsListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
