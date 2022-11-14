import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSocialLinkTypeNullableFilter } from '../prisma/enum-social-link-type-nullable-filter.input';

@InputType()
export class SocialLinkWhereInput {

    @Field(() => [SocialLinkWhereInput], {nullable:true})
    AND?: Array<SocialLinkWhereInput>;

    @Field(() => [SocialLinkWhereInput], {nullable:true})
    OR?: Array<SocialLinkWhereInput>;

    @Field(() => [SocialLinkWhereInput], {nullable:true})
    NOT?: Array<SocialLinkWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumSocialLinkTypeNullableFilter, {nullable:true})
    socialLinkType?: EnumSocialLinkTypeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;
}
