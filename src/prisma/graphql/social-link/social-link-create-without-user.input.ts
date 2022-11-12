import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkType } from '../prisma/social-link-type.enum';
import * as Validator from 'class-validator';

@InputType()
export class SocialLinkCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SocialLinkType, {nullable:false})
    socialLinkType!: keyof typeof SocialLinkType;

    @Field(() => String, {nullable:false})
    @Validator.IsUrl()
    url!: string;
}
