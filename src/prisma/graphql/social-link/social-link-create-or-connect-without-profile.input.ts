import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { Type } from 'class-transformer';
import { SocialLinkCreateWithoutProfileInput } from './social-link-create-without-profile.input';

@InputType()
export class SocialLinkCreateOrConnectWithoutProfileInput {

    @Field(() => SocialLinkWhereUniqueInput, {nullable:false})
    @Type(() => SocialLinkWhereUniqueInput)
    where!: SocialLinkWhereUniqueInput;

    @Field(() => SocialLinkCreateWithoutProfileInput, {nullable:false})
    @Type(() => SocialLinkCreateWithoutProfileInput)
    create!: SocialLinkCreateWithoutProfileInput;
}
