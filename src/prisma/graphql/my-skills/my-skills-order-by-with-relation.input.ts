import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { SkillOrderByWithRelationInput } from '../skill/skill-order-by-with-relation.input';
import { MyRootsOrderByWithRelationInput } from '../my-roots/my-roots-order-by-with-relation.input';

@InputType()
export class MySkillsOrderByWithRelationInput {

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SkillOrderByWithRelationInput, {nullable:true})
    skill?: SkillOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    skillId?: keyof typeof SortOrder;

    @Field(() => MyRootsOrderByWithRelationInput, {nullable:true})
    myRoots?: MyRootsOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    myRootsId?: keyof typeof SortOrder;
}
