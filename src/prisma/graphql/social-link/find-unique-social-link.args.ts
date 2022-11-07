import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSocialLinkArgs {

    @Field(() => SocialLinkWhereUniqueInput, {nullable:false})
    @Type(() => SocialLinkWhereUniqueInput)
    where!: SocialLinkWhereUniqueInput;
}
