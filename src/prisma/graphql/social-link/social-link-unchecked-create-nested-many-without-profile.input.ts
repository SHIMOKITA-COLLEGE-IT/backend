import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkCreateWithoutProfileInput } from './social-link-create-without-profile.input';
import { Type } from 'class-transformer';
import { SocialLinkCreateOrConnectWithoutProfileInput } from './social-link-create-or-connect-without-profile.input';
import { SocialLinkCreateManyProfileInputEnvelope } from './social-link-create-many-profile-input-envelope.input';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';

@InputType()
export class SocialLinkUncheckedCreateNestedManyWithoutProfileInput {

    @Field(() => [SocialLinkCreateWithoutProfileInput], {nullable:true})
    @Type(() => SocialLinkCreateWithoutProfileInput)
    create?: Array<SocialLinkCreateWithoutProfileInput>;

    @Field(() => [SocialLinkCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => SocialLinkCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<SocialLinkCreateOrConnectWithoutProfileInput>;

    @Field(() => SocialLinkCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => SocialLinkCreateManyProfileInputEnvelope)
    createMany?: SocialLinkCreateManyProfileInputEnvelope;

    @Field(() => [SocialLinkWhereUniqueInput], {nullable:true})
    @Type(() => SocialLinkWhereUniqueInput)
    connect?: Array<SocialLinkWhereUniqueInput>;
}
