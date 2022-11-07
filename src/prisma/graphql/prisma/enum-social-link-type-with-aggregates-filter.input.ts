import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkType } from './social-link-type.enum';
import { NestedEnumSocialLinkTypeWithAggregatesFilter } from './nested-enum-social-link-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSocialLinkTypeFilter } from './nested-enum-social-link-type-filter.input';

@InputType()
export class EnumSocialLinkTypeWithAggregatesFilter {

    @Field(() => SocialLinkType, {nullable:true})
    equals?: keyof typeof SocialLinkType;

    @Field(() => [SocialLinkType], {nullable:true})
    in?: Array<keyof typeof SocialLinkType>;

    @Field(() => [SocialLinkType], {nullable:true})
    notIn?: Array<keyof typeof SocialLinkType>;

    @Field(() => NestedEnumSocialLinkTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSocialLinkTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSocialLinkTypeFilter, {nullable:true})
    _min?: NestedEnumSocialLinkTypeFilter;

    @Field(() => NestedEnumSocialLinkTypeFilter, {nullable:true})
    _max?: NestedEnumSocialLinkTypeFilter;
}
