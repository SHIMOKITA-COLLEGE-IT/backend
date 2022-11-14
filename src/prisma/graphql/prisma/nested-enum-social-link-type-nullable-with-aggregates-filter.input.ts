import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkType } from './social-link-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumSocialLinkTypeNullableFilter } from './nested-enum-social-link-type-nullable-filter.input';

@InputType()
export class NestedEnumSocialLinkTypeNullableWithAggregatesFilter {

    @Field(() => SocialLinkType, {nullable:true})
    equals?: keyof typeof SocialLinkType;

    @Field(() => [SocialLinkType], {nullable:true})
    in?: Array<keyof typeof SocialLinkType>;

    @Field(() => [SocialLinkType], {nullable:true})
    notIn?: Array<keyof typeof SocialLinkType>;

    @Field(() => NestedEnumSocialLinkTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSocialLinkTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumSocialLinkTypeNullableFilter, {nullable:true})
    _min?: NestedEnumSocialLinkTypeNullableFilter;

    @Field(() => NestedEnumSocialLinkTypeNullableFilter, {nullable:true})
    _max?: NestedEnumSocialLinkTypeNullableFilter;
}
