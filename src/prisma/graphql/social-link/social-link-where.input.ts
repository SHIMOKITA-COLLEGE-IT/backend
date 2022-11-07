import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSocialLinkTypeFilter } from '../prisma/enum-social-link-type-filter.input';

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

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    profileId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumSocialLinkTypeFilter, {nullable:true})
    socialLinkType?: EnumSocialLinkTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;
}
