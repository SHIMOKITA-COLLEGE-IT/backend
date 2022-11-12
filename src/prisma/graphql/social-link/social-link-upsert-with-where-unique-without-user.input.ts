import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { Type } from 'class-transformer';
import { SocialLinkUpdateWithoutUserInput } from './social-link-update-without-user.input';
import { SocialLinkCreateWithoutUserInput } from './social-link-create-without-user.input';

@InputType()
export class SocialLinkUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SocialLinkWhereUniqueInput, {nullable:false})
    @Type(() => SocialLinkWhereUniqueInput)
    where!: SocialLinkWhereUniqueInput;

    @Field(() => SocialLinkUpdateWithoutUserInput, {nullable:false})
    @Type(() => SocialLinkUpdateWithoutUserInput)
    update!: SocialLinkUpdateWithoutUserInput;

    @Field(() => SocialLinkCreateWithoutUserInput, {nullable:false})
    @Type(() => SocialLinkCreateWithoutUserInput)
    create!: SocialLinkCreateWithoutUserInput;
}
