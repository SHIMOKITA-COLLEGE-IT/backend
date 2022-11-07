import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { SocialLinkOrderByRelationAggregateInput } from '../social-link/social-link-order-by-relation-aggregate.input';
import { ShimokitaCollegeProfileOrderByWithRelationInput } from '../shimokita-college-profile/shimokita-college-profile-order-by-with-relation.input';
import { MyRootsOrderByRelationAggregateInput } from '../my-roots/my-roots-order-by-relation-aggregate.input';
import { MySkillsOrderByRelationAggregateInput } from '../my-skills/my-skills-order-by-relation-aggregate.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { PhotoOrderByRelationAggregateInput } from '../photo/photo-order-by-relation-aggregate.input';

@InputType()
export class ProfileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nickName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    showOnlyNickname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hideAge?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position?: keyof typeof SortOrder;

    @Field(() => SocialLinkOrderByRelationAggregateInput, {nullable:true})
    socialLinks?: SocialLinkOrderByRelationAggregateInput;

    @Field(() => ShimokitaCollegeProfileOrderByWithRelationInput, {nullable:true})
    shimokitaCollegeProfile?: ShimokitaCollegeProfileOrderByWithRelationInput;

    @Field(() => MyRootsOrderByRelationAggregateInput, {nullable:true})
    myRoots?: MyRootsOrderByRelationAggregateInput;

    @Field(() => MySkillsOrderByRelationAggregateInput, {nullable:true})
    mySkills?: MySkillsOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;

    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => PhotoOrderByRelationAggregateInput, {nullable:true})
    photos?: PhotoOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
