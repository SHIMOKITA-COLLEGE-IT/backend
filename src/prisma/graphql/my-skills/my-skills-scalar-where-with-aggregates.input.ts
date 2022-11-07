import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class MySkillsScalarWhereWithAggregatesInput {

    @Field(() => [MySkillsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MySkillsScalarWhereWithAggregatesInput>;

    @Field(() => [MySkillsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MySkillsScalarWhereWithAggregatesInput>;

    @Field(() => [MySkillsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MySkillsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    profileId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    skillId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    myRootsId?: IntNullableWithAggregatesFilter;
}
