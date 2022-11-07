import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkWhereInput } from './social-link-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySocialLinkArgs {

    @Field(() => SocialLinkWhereInput, {nullable:true})
    @Type(() => SocialLinkWhereInput)
    where?: SocialLinkWhereInput;
}
