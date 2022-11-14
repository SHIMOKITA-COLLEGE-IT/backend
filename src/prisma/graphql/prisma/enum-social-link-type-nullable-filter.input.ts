import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkType } from './social-link-type.enum';
import { NestedEnumSocialLinkTypeNullableFilter } from './nested-enum-social-link-type-nullable-filter.input';

@InputType()
export class EnumSocialLinkTypeNullableFilter {

    @Field(() => SocialLinkType, {nullable:true})
    equals?: keyof typeof SocialLinkType;

    @Field(() => [SocialLinkType], {nullable:true})
    in?: Array<keyof typeof SocialLinkType>;

    @Field(() => [SocialLinkType], {nullable:true})
    notIn?: Array<keyof typeof SocialLinkType>;

    @Field(() => NestedEnumSocialLinkTypeNullableFilter, {nullable:true})
    not?: NestedEnumSocialLinkTypeNullableFilter;
}
