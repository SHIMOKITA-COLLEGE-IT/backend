import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkWhereInput } from './social-link-where.input';

@InputType()
export class SocialLinkListRelationFilter {

    @Field(() => SocialLinkWhereInput, {nullable:true})
    every?: SocialLinkWhereInput;

    @Field(() => SocialLinkWhereInput, {nullable:true})
    some?: SocialLinkWhereInput;

    @Field(() => SocialLinkWhereInput, {nullable:true})
    none?: SocialLinkWhereInput;
}
