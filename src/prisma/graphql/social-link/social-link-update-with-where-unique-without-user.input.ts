import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { Type } from 'class-transformer';
import { SocialLinkUpdateWithoutUserInput } from './social-link-update-without-user.input';

@InputType()
export class SocialLinkUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => SocialLinkWhereUniqueInput, {nullable:false})
    @Type(() => SocialLinkWhereUniqueInput)
    where!: SocialLinkWhereUniqueInput;

    @Field(() => SocialLinkUpdateWithoutUserInput, {nullable:false})
    @Type(() => SocialLinkUpdateWithoutUserInput)
    data!: SocialLinkUpdateWithoutUserInput;
}
