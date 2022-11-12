import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class UserSkillAcquisitionScalarWhereWithAggregatesInput {

    @Field(() => [UserSkillAcquisitionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserSkillAcquisitionScalarWhereWithAggregatesInput>;

    @Field(() => [UserSkillAcquisitionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserSkillAcquisitionScalarWhereWithAggregatesInput>;

    @Field(() => [UserSkillAcquisitionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserSkillAcquisitionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    skillId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    rootsId?: IntNullableWithAggregatesFilter;
}
