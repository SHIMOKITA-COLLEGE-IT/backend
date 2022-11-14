import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SocialLinkOrderByRelationAggregateInput } from '../social-link/social-link-order-by-relation-aggregate.input';
import { GenerationOrderByRelationAggregateInput } from '../generation/generation-order-by-relation-aggregate.input';
import { GroupOrderByRelationAggregateInput } from '../group/group-order-by-relation-aggregate.input';
import { UserRootsTracingOrderByRelationAggregateInput } from '../user-roots-tracing/user-roots-tracing-order-by-relation-aggregate.input';
import { UserSkillAcquisitionOrderByRelationAggregateInput } from '../user-skill-acquisition/user-skill-acquisition-order-by-relation-aggregate.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firebaseAuthUid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

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

    @Field(() => SortOrder, {nullable:true})
    isAlumni?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roomNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postNumber?: keyof typeof SortOrder;

    @Field(() => GenerationOrderByRelationAggregateInput, {nullable:true})
    generations?: GenerationOrderByRelationAggregateInput;

    @Field(() => GroupOrderByRelationAggregateInput, {nullable:true})
    groups?: GroupOrderByRelationAggregateInput;

    @Field(() => UserRootsTracingOrderByRelationAggregateInput, {nullable:true})
    roots?: UserRootsTracingOrderByRelationAggregateInput;

    @Field(() => UserSkillAcquisitionOrderByRelationAggregateInput, {nullable:true})
    skills?: UserSkillAcquisitionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;

    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    photoUrls?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
