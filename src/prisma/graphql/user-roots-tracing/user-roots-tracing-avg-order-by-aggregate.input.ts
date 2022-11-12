import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserRootsTracingAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    rootsId?: keyof typeof SortOrder;
}