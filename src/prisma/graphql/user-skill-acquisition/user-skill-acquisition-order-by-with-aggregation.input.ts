import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserSkillAcquisitionCountOrderByAggregateInput } from './user-skill-acquisition-count-order-by-aggregate.input';
import { UserSkillAcquisitionAvgOrderByAggregateInput } from './user-skill-acquisition-avg-order-by-aggregate.input';
import { UserSkillAcquisitionMaxOrderByAggregateInput } from './user-skill-acquisition-max-order-by-aggregate.input';
import { UserSkillAcquisitionMinOrderByAggregateInput } from './user-skill-acquisition-min-order-by-aggregate.input';
import { UserSkillAcquisitionSumOrderByAggregateInput } from './user-skill-acquisition-sum-order-by-aggregate.input';

@InputType()
export class UserSkillAcquisitionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skillId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rootsId?: keyof typeof SortOrder;

    @Field(() => UserSkillAcquisitionCountOrderByAggregateInput, {nullable:true})
    _count?: UserSkillAcquisitionCountOrderByAggregateInput;

    @Field(() => UserSkillAcquisitionAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserSkillAcquisitionAvgOrderByAggregateInput;

    @Field(() => UserSkillAcquisitionMaxOrderByAggregateInput, {nullable:true})
    _max?: UserSkillAcquisitionMaxOrderByAggregateInput;

    @Field(() => UserSkillAcquisitionMinOrderByAggregateInput, {nullable:true})
    _min?: UserSkillAcquisitionMinOrderByAggregateInput;

    @Field(() => UserSkillAcquisitionSumOrderByAggregateInput, {nullable:true})
    _sum?: UserSkillAcquisitionSumOrderByAggregateInput;
}
