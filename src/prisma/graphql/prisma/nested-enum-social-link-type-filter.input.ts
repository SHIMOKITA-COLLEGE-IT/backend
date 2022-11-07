import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkType } from './social-link-type.enum';

@InputType()
export class NestedEnumSocialLinkTypeFilter {

    @Field(() => SocialLinkType, {nullable:true})
    equals?: keyof typeof SocialLinkType;

    @Field(() => [SocialLinkType], {nullable:true})
    in?: Array<keyof typeof SocialLinkType>;

    @Field(() => [SocialLinkType], {nullable:true})
    notIn?: Array<keyof typeof SocialLinkType>;

    @Field(() => NestedEnumSocialLinkTypeFilter, {nullable:true})
    not?: NestedEnumSocialLinkTypeFilter;
}
