import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumSocialLinkTypeNullableWithAggregatesFilter } from '../prisma/enum-social-link-type-nullable-with-aggregates-filter.input';

@InputType()
export class SocialLinkScalarWhereWithAggregatesInput {

    @Field(() => [SocialLinkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SocialLinkScalarWhereWithAggregatesInput>;

    @Field(() => [SocialLinkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SocialLinkScalarWhereWithAggregatesInput>;

    @Field(() => [SocialLinkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SocialLinkScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumSocialLinkTypeNullableWithAggregatesFilter, {nullable:true})
    socialLinkType?: EnumSocialLinkTypeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;
}
