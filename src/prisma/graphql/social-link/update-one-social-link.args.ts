import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkUpdateInput } from './social-link-update.input';
import { Type } from 'class-transformer';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';

@ArgsType()
export class UpdateOneSocialLinkArgs {

    @Field(() => SocialLinkUpdateInput, {nullable:false})
    @Type(() => SocialLinkUpdateInput)
    data!: SocialLinkUpdateInput;

    @Field(() => SocialLinkWhereUniqueInput, {nullable:false})
    @Type(() => SocialLinkWhereUniqueInput)
    where!: SocialLinkWhereUniqueInput;
}
