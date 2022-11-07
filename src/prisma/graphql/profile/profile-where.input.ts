import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SocialLinkListRelationFilter } from '../social-link/social-link-list-relation-filter.input';
import { ShimokitaCollegeProfileRelationFilter } from '../shimokita-college-profile/shimokita-college-profile-relation-filter.input';
import { MyRootsListRelationFilter } from '../my-roots/my-roots-list-relation-filter.input';
import { MySkillsListRelationFilter } from '../my-skills/my-skills-list-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { PhotoListRelationFilter } from '../photo/photo-list-relation-filter.input';

@InputType()
export class ProfileWhereInput {

    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

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

    @Field(() => ShimokitaCollegeProfileRelationFilter, {nullable:true})
    shimokitaCollegeProfile?: ShimokitaCollegeProfileRelationFilter;

    @Field(() => MyRootsListRelationFilter, {nullable:true})
    myRoots?: MyRootsListRelationFilter;

    @Field(() => MySkillsListRelationFilter, {nullable:true})
    mySkills?: MySkillsListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    bio?: StringFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;

    @Field(() => PhotoListRelationFilter, {nullable:true})
    photos?: PhotoListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
