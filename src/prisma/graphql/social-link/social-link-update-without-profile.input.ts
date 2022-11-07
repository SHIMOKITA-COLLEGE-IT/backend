import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumSocialLinkTypeFieldUpdateOperationsInput } from '../prisma/enum-social-link-type-field-update-operations.input';

@InputType()
export class SocialLinkUpdateWithoutProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumSocialLinkTypeFieldUpdateOperationsInput, {nullable:true})
    socialLinkType?: EnumSocialLinkTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;
}
