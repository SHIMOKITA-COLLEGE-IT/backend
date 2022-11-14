import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSocialLinkTypeNullableFilter } from '../prisma/enum-social-link-type-nullable-filter.input';

@InputType()
export class SocialLinkScalarWhereInput {

    @Field(() => [SocialLinkScalarWhereInput], {nullable:true})
    AND?: Array<SocialLinkScalarWhereInput>;

    @Field(() => [SocialLinkScalarWhereInput], {nullable:true})
    OR?: Array<SocialLinkScalarWhereInput>;

    @Field(() => [SocialLinkScalarWhereInput], {nullable:true})
    NOT?: Array<SocialLinkScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumSocialLinkTypeNullableFilter, {nullable:true})
    socialLinkType?: EnumSocialLinkTypeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;
}
