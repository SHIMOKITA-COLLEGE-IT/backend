import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { RootsOrderByWithRelationInput } from '../roots/roots-order-by-with-relation.input';
import { UserSkillAcquisitionOrderByRelationAggregateInput } from '../user-skill-acquisition/user-skill-acquisition-order-by-relation-aggregate.input';

@InputType()
export class UserRootsTracingOrderByWithRelationInput {

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => RootsOrderByWithRelationInput, {nullable:true})
    roots?: RootsOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    rootsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => UserSkillAcquisitionOrderByRelationAggregateInput, {nullable:true})
    userSkillAcquisitions?: UserSkillAcquisitionOrderByRelationAggregateInput;
}
