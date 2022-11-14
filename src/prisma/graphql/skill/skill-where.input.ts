import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { SkillRelationFilter } from './skill-relation-filter.input';
import { SkillListRelationFilter } from './skill-list-relation-filter.input';
import { UserSkillAcquisitionListRelationFilter } from '../user-skill-acquisition/user-skill-acquisition-list-relation-filter.input';

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

    @Field(() => UserSkillAcquisitionListRelationFilter, {nullable:true})
    users?: UserSkillAcquisitionListRelationFilter;
}
