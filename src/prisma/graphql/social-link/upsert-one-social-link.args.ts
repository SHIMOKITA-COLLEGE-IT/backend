import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { Type } from 'class-transformer';
import { SocialLinkCreateInput } from './social-link-create.input';
import { SocialLinkUpdateInput } from './social-link-update.input';

@ArgsType()
export class UpsertOneSocialLinkArgs {

    @Field(() => SocialLinkWhereUniqueInput, {nullable:false})
    @Type(() => SocialLinkWhereUniqueInput)
    where!: SocialLinkWhereUniqueInput;

    @Field(() => SocialLinkCreateInput, {nullable:false})
    @Type(() => SocialLinkCreateInput)
    create!: SocialLinkCreateInput;

    @Field(() => SocialLinkUpdateInput, {nullable:false})
    @Type(() => SocialLinkUpdateInput)
    update!: SocialLinkUpdateInput;
}
