import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MySkillsCountOrderByAggregateInput } from './my-skills-count-order-by-aggregate.input';
import { MySkillsAvgOrderByAggregateInput } from './my-skills-avg-order-by-aggregate.input';
import { MySkillsMaxOrderByAggregateInput } from './my-skills-max-order-by-aggregate.input';
import { MySkillsMinOrderByAggregateInput } from './my-skills-min-order-by-aggregate.input';
import { MySkillsSumOrderByAggregateInput } from './my-skills-sum-order-by-aggregate.input';

@InputType()
export class MySkillsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skillId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    myRootsId?: keyof typeof SortOrder;

    @Field(() => MySkillsCountOrderByAggregateInput, {nullable:true})
    _count?: MySkillsCountOrderByAggregateInput;

    @Field(() => MySkillsAvgOrderByAggregateInput, {nullable:true})
    _avg?: MySkillsAvgOrderByAggregateInput;

    @Field(() => MySkillsMaxOrderByAggregateInput, {nullable:true})
    _max?: MySkillsMaxOrderByAggregateInput;

    @Field(() => MySkillsMinOrderByAggregateInput, {nullable:true})
    _min?: MySkillsMinOrderByAggregateInput;

    @Field(() => MySkillsSumOrderByAggregateInput, {nullable:true})
    _sum?: MySkillsSumOrderByAggregateInput;
}
