import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutSocialLinksInput } from '../profile/profile-create-nested-one-without-social-links.input';
import { SocialLinkType } from '../prisma/social-link-type.enum';

@InputType()
export class SocialLinkCreateInput {

    @Field(() => ProfileCreateNestedOneWithoutSocialLinksInput, {nullable:false})
    profile!: ProfileCreateNestedOneWithoutSocialLinksInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SocialLinkType, {nullable:false})
    socialLinkType!: keyof typeof SocialLinkType;

    @Field(() => String, {nullable:false})
    url!: string;
}
