import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutSocialLinksNestedInput } from '../user/user-update-one-required-without-social-links-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableEnumSocialLinkTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-social-link-type-field-update-operations.input';

@InputType()
export class SocialLinkUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutSocialLinksNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSocialLinksNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableEnumSocialLinkTypeFieldUpdateOperationsInput, {nullable:true})
    socialLinkType?: NullableEnumSocialLinkTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;
}
