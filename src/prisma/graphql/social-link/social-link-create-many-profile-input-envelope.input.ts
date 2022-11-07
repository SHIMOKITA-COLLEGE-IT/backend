import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkCreateManyProfileInput } from './social-link-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class SocialLinkCreateManyProfileInputEnvelope {

    @Field(() => [SocialLinkCreateManyProfileInput], {nullable:false})
    @Type(() => SocialLinkCreateManyProfileInput)
    data!: Array<SocialLinkCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
