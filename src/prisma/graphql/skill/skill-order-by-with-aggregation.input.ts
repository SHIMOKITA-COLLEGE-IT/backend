import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SkillCountOrderByAggregateInput } from './skill-count-order-by-aggregate.input';
import { SkillAvgOrderByAggregateInput } from './skill-avg-order-by-aggregate.input';
import { SkillMaxOrderByAggregateInput } from './skill-max-order-by-aggregate.input';
import { SkillMinOrderByAggregateInput } from './skill-min-order-by-aggregate.input';
import { SkillSumOrderByAggregateInput } from './skill-sum-order-by-aggregate.input';

@InputType()
export class SkillOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SkillCountOrderByAggregateInput, {nullable:true})
    _count?: SkillCountOrderByAggregateInput;

    @Field(() => SkillAvgOrderByAggregateInput, {nullable:true})
    _avg?: SkillAvgOrderByAggregateInput;

    @Field(() => SkillMaxOrderByAggregateInput, {nullable:true})
    _max?: SkillMaxOrderByAggregateInput;

    @Field(() => SkillMinOrderByAggregateInput, {nullable:true})
    _min?: SkillMinOrderByAggregateInput;

    @Field(() => SkillSumOrderByAggregateInput, {nullable:true})
    _sum?: SkillSumOrderByAggregateInput;
}
