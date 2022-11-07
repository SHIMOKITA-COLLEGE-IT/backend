import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateOneRequiredWithoutSocialLinksNestedInput } from '../profile/profile-update-one-required-without-social-links-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumSocialLinkTypeFieldUpdateOperationsInput } from '../prisma/enum-social-link-type-field-update-operations.input';

@InputType()
export class SocialLinkUpdateInput {

    @Field(() => ProfileUpdateOneRequiredWithoutSocialLinksNestedInput, {nullable:true})
    profile?: ProfileUpdateOneRequiredWithoutSocialLinksNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumSocialLinkTypeFieldUpdateOperationsInput, {nullable:true})
    socialLinkType?: EnumSocialLinkTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;
}
