import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkCreateWithoutUserInput } from './social-link-create-without-user.input';
import { Type } from 'class-transformer';
import { SocialLinkCreateOrConnectWithoutUserInput } from './social-link-create-or-connect-without-user.input';
import { SocialLinkCreateManyUserInputEnvelope } from './social-link-create-many-user-input-envelope.input';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';

@InputType()
export class SocialLinkCreateNestedManyWithoutUserInput {

    @Field(() => [SocialLinkCreateWithoutUserInput], {nullable:true})
    @Type(() => SocialLinkCreateWithoutUserInput)
    create?: Array<SocialLinkCreateWithoutUserInput>;

    @Field(() => [SocialLinkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SocialLinkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SocialLinkCreateOrConnectWithoutUserInput>;

    @Field(() => SocialLinkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SocialLinkCreateManyUserInputEnvelope)
    createMany?: SocialLinkCreateManyUserInputEnvelope;

    @Field(() => [SocialLinkWhereUniqueInput], {nullable:true})
    @Type(() => SocialLinkWhereUniqueInput)
    connect?: Array<SocialLinkWhereUniqueInput>;
}
