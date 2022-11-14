import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableEnumSocialLinkTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-social-link-type-field-update-operations.input';

@InputType()
export class SocialLinkUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableEnumSocialLinkTypeFieldUpdateOperationsInput, {nullable:true})
    socialLinkType?: NullableEnumSocialLinkTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;
}
