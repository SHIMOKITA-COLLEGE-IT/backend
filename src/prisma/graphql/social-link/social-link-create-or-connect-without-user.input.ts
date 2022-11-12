import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { Type } from 'class-transformer';
import { SocialLinkCreateWithoutUserInput } from './social-link-create-without-user.input';

@InputType()
export class SocialLinkCreateOrConnectWithoutUserInput {

    @Field(() => SocialLinkWhereUniqueInput, {nullable:false})
    @Type(() => SocialLinkWhereUniqueInput)
    where!: SocialLinkWhereUniqueInput;

    @Field(() => SocialLinkCreateWithoutUserInput, {nullable:false})
    @Type(() => SocialLinkCreateWithoutUserInput)
    create!: SocialLinkCreateWithoutUserInput;
}
