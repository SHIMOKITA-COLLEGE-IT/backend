import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutSocialLinksInput } from './profile-create-without-social-links.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutSocialLinksInput } from './profile-create-or-connect-without-social-links.input';
import { ProfileUpsertWithoutSocialLinksInput } from './profile-upsert-without-social-links.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutSocialLinksInput } from './profile-update-without-social-links.input';

@InputType()
export class ProfileUpdateOneRequiredWithoutSocialLinksNestedInput {

    @Field(() => ProfileCreateWithoutSocialLinksInput, {nullable:true})
    @Type(() => ProfileCreateWithoutSocialLinksInput)
    create?: ProfileCreateWithoutSocialLinksInput;

    @Field(() => ProfileCreateOrConnectWithoutSocialLinksInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutSocialLinksInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutSocialLinksInput;

    @Field(() => ProfileUpsertWithoutSocialLinksInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutSocialLinksInput)
    upsert?: ProfileUpsertWithoutSocialLinksInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutSocialLinksInput, {nullable:true})
    @Type(() => ProfileUpdateWithoutSocialLinksInput)
    update?: ProfileUpdateWithoutSocialLinksInput;
}
