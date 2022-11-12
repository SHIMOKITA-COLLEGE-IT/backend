import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SkillOrderByRelationAggregateInput } from './skill-order-by-relation-aggregate.input';
import { UserSkillAcquisitionOrderByRelationAggregateInput } from '../user-skill-acquisition/user-skill-acquisition-order-by-relation-aggregate.input';

@InputType()
export class SkillOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => SkillOrderByWithRelationInput, {nullable:true})
    parent?: SkillOrderByWithRelationInput;

    @Field(() => SkillOrderByRelationAggregateInput, {nullable:true})
    children?: SkillOrderByRelationAggregateInput;

    @Field(() => UserSkillAcquisitionOrderByRelationAggregateInput, {nullable:true})
    users?: UserSkillAcquisitionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
