import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserSkillAcquisitionAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    skillId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rootsId?: keyof typeof SortOrder;
}
