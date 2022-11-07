import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkType } from './social-link-type.enum';

@InputType()
export class EnumSocialLinkTypeFieldUpdateOperationsInput {

    @Field(() => SocialLinkType, {nullable:true})
    set?: keyof typeof SocialLinkType;
}
