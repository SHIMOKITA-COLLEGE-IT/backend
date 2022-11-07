import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkCreateInput } from './social-link-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSocialLinkArgs {

    @Field(() => SocialLinkCreateInput, {nullable:false})
    @Type(() => SocialLinkCreateInput)
    data!: SocialLinkCreateInput;
}
