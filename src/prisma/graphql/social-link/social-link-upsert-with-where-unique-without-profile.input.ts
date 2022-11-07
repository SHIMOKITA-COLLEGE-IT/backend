import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { Type } from 'class-transformer';
import { SocialLinkUpdateWithoutProfileInput } from './social-link-update-without-profile.input';
import { SocialLinkCreateWithoutProfileInput } from './social-link-create-without-profile.input';

@InputType()
export class SocialLinkUpsertWithWhereUniqueWithoutProfileInput {

    @Field(() => SocialLinkWhereUniqueInput, {nullable:false})
    @Type(() => SocialLinkWhereUniqueInput)
    where!: SocialLinkWhereUniqueInput;

    @Field(() => SocialLinkUpdateWithoutProfileInput, {nullable:false})
    @Type(() => SocialLinkUpdateWithoutProfileInput)
    update!: SocialLinkUpdateWithoutProfileInput;

    @Field(() => SocialLinkCreateWithoutProfileInput, {nullable:false})
    @Type(() => SocialLinkCreateWithoutProfileInput)
    create!: SocialLinkCreateWithoutProfileInput;
}