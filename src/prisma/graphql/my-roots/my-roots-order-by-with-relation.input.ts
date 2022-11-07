import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { RootsOrderByWithRelationInput } from '../roots/roots-order-by-with-relation.input';
import { MySkillsOrderByRelationAggregateInput } from '../my-skills/my-skills-order-by-relation-aggregate.input';

@InputType()
export class MyRootsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => RootsOrderByWithRelationInput, {nullable:true})
    roots?: RootsOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    rootsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => MySkillsOrderByRelationAggregateInput, {nullable:true})
    profilesOnSkills?: MySkillsOrderByRelationAggregateInput;
}
