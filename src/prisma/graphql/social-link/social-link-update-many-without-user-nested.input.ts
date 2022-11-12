import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkCreateWithoutUserInput } from './social-link-create-without-user.input';
import { Type } from 'class-transformer';
import { SocialLinkCreateOrConnectWithoutUserInput } from './social-link-create-or-connect-without-user.input';
import { SocialLinkUpsertWithWhereUniqueWithoutUserInput } from './social-link-upsert-with-where-unique-without-user.input';
import { SocialLinkCreateManyUserInputEnvelope } from './social-link-create-many-user-input-envelope.input';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { SocialLinkUpdateWithWhereUniqueWithoutUserInput } from './social-link-update-with-where-unique-without-user.input';
import { SocialLinkUpdateManyWithWhereWithoutUserInput } from './social-link-update-many-with-where-without-user.input';
import { SocialLinkScalarWhereInput } from './social-link-scalar-where.input';

@InputType()
export class SocialLinkUpdateManyWithoutUserNestedInput {

    @Field(() => [SocialLinkCreateWithoutUserInput], {nullable:true})
    @Type(() => SocialLinkCreateWithoutUserInput)
    create?: Array<SocialLinkCreateWithoutUserInput>;

    @Field(() => [SocialLinkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SocialLinkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SocialLinkCreateOrConnectWithoutUserInput>;

    @Field(() => [SocialLinkUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SocialLinkUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SocialLinkUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SocialLinkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SocialLinkCreateManyUserInputEnvelope)
    createMany?: SocialLinkCreateManyUserInputEnvelope;

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

    @Field(() => [SocialLinkUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SocialLinkUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SocialLinkUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SocialLinkUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SocialLinkUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SocialLinkUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SocialLinkScalarWhereInput], {nullable:true})
    @Type(() => SocialLinkScalarWhereInput)
    deleteMany?: Array<SocialLinkScalarWhereInput>;
}
