import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkCreateWithoutProfileInput } from './social-link-create-without-profile.input';
import { Type } from 'class-transformer';
import { SocialLinkCreateOrConnectWithoutProfileInput } from './social-link-create-or-connect-without-profile.input';
import { SocialLinkUpsertWithWhereUniqueWithoutProfileInput } from './social-link-upsert-with-where-unique-without-profile.input';
import { SocialLinkCreateManyProfileInputEnvelope } from './social-link-create-many-profile-input-envelope.input';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { SocialLinkUpdateWithWhereUniqueWithoutProfileInput } from './social-link-update-with-where-unique-without-profile.input';
import { SocialLinkUpdateManyWithWhereWithoutProfileInput } from './social-link-update-many-with-where-without-profile.input';
import { SocialLinkScalarWhereInput } from './social-link-scalar-where.input';

@InputType()
export class SocialLinkUpdateManyWithoutProfileNestedInput {

    @Field(() => [SocialLinkCreateWithoutProfileInput], {nullable:true})
    @Type(() => SocialLinkCreateWithoutProfileInput)
    create?: Array<SocialLinkCreateWithoutProfileInput>;

    @Field(() => [SocialLinkCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => SocialLinkCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<SocialLinkCreateOrConnectWithoutProfileInput>;

    @Field(() => [SocialLinkUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => SocialLinkUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<SocialLinkUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => SocialLinkCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => SocialLinkCreateManyProfileInputEnvelope)
    createMany?: SocialLinkCreateManyProfileInputEnvelope;

    @Field(() => [SocialLinkWhereUniqueInput], {nullable:true})
    @Type(() => SocialLinkWhereUniqueInput)
    set?: Array<SocialLinkWhereUniqueInput>;

    @Field(() => [SocialLinkWhereUniqueInput], {nullable:true})
    @Type(() => SocialLinkWhereUniqueInput)
    disconnect?: Array<SocialLinkWhereUniqueInput>;

    @Field(() => [SocialLinkWhereUniqueInput], {nullable:true})
    @Type(() => SocialLinkWhereUniqueInput)
    delete?: Array<SocialLinkWhereUniqueInput>;

    @Field(() => [SocialLinkWhereUniqueInput], {nullable:true})
    @Type(() => SocialLinkWhereUniqueInput)
    connect?: Array<SocialLinkWhereUniqueInput>;

    @Field(() => [SocialLinkUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => SocialLinkUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<SocialLinkUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [SocialLinkUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => SocialLinkUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<SocialLinkUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [SocialLinkScalarWhereInput], {nullable:true})
    @Type(() => SocialLinkScalarWhereInput)
    deleteMany?: Array<SocialLinkScalarWhereInput>;
}
