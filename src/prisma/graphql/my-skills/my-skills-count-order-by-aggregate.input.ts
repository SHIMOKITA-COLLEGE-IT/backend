import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MySkillsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skillId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    myRootsId?: keyof typeof SortOrder;
}
