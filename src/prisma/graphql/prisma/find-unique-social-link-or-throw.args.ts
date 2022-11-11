import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkWhereUniqueInput } from '../social-link/social-link-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSocialLinkOrThrowArgs {

    @Field(() => SocialLinkWhereUniqueInput, {nullable:false})
    @Type(() => SocialLinkWhereUniqueInput)
    where!: SocialLinkWhereUniqueInput;
}
