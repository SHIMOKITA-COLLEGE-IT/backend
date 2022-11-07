import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumSocialLinkTypeFieldUpdateOperationsInput } from '../prisma/enum-social-link-type-field-update-operations.input';

@InputType()
export class SocialLinkUncheckedUpdateManyWithoutSocialLinksInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumSocialLinkTypeFieldUpdateOperationsInput, {nullable:true})
    socialLinkType?: EnumSocialLinkTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;
}
