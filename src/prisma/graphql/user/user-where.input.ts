import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SocialLinkListRelationFilter } from '../social-link/social-link-list-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { GenerationListRelationFilter } from '../generation/generation-list-relation-filter.input';
import { GroupListRelationFilter } from '../group/group-list-relation-filter.input';
import { UserRootsTracingListRelationFilter } from '../user-roots-tracing/user-roots-tracing-list-relation-filter.input';
import { UserSkillAcquisitionListRelationFilter } from '../user-skill-acquisition/user-skill-acquisition-list-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firebaseAuthUid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    disabled?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageUrl?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nickName?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    showOnlyNickname?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    birthday?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    hideAge?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    position?: StringFilter;

    @Field(() => SocialLinkListRelationFilter, {nullable:true})
    socialLinks?: SocialLinkListRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAlumni?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    roomNumber?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    postNumber?: IntNullableFilter;

    @Field(() => GenerationListRelationFilter, {nullable:true})
    generations?: GenerationListRelationFilter;

    @Field(() => GroupListRelationFilter, {nullable:true})
    groups?: GroupListRelationFilter;

    @Field(() => UserRootsTracingListRelationFilter, {nullable:true})
    roots?: UserRootsTracingListRelationFilter;

    @Field(() => UserSkillAcquisitionListRelationFilter, {nullable:true})
    skills?: UserSkillAcquisitionListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    bio?: StringFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    photoUrls?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
