import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class SkillScalarWhereWithAggregatesInput {

    @Field(() => [SkillScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SkillScalarWhereWithAggregatesInput>;

    @Field(() => [SkillScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SkillScalarWhereWithAggregatesInput>;

    @Field(() => [SkillScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SkillScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    parentId?: IntNullableWithAggregatesFilter;
}
