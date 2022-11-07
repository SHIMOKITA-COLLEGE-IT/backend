import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MyRootsOrderByRelationAggregateInput } from '../my-roots/my-roots-order-by-relation-aggregate.input';

@InputType()
export class RootsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rootsType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    googleMapUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    introductionUrl?: keyof typeof SortOrder;

    @Field(() => MyRootsOrderByRelationAggregateInput, {nullable:true})
    myRoots?: MyRootsOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
