import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { SkillOrderByWithRelationInput } from '../skill/skill-order-by-with-relation.input';
import { UserRootsTracingOrderByWithRelationInput } from '../user-roots-tracing/user-roots-tracing-order-by-with-relation.input';

@InputType()
export class UserSkillAcquisitionOrderByWithRelationInput {

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SkillOrderByWithRelationInput, {nullable:true})
    skill?: SkillOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    skillId?: keyof typeof SortOrder;

    @Field(() => UserRootsTracingOrderByWithRelationInput, {nullable:true})
    userRootsTracing?: UserRootsTracingOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    rootsId?: keyof typeof SortOrder;
}
