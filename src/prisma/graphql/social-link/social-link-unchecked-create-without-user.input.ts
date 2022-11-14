import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SocialLinkType } from '../prisma/social-link-type.enum';
import * as Validator from 'class-validator';

@InputType()
export class SocialLinkUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SocialLinkType, {nullable:true})
    socialLinkType?: keyof typeof SocialLinkType;

    @Field(() => String, {nullable:false})
    @Validator.IsUrl()
    url!: string;
}
