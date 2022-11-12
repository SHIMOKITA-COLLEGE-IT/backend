import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkCreateManyUserInput } from './social-link-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SocialLinkCreateManyUserInputEnvelope {

    @Field(() => [SocialLinkCreateManyUserInput], {nullable:false})
    @Type(() => SocialLinkCreateManyUserInput)
    data!: Array<SocialLinkCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
