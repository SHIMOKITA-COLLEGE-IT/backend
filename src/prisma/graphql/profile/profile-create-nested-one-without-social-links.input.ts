import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutSocialLinksInput } from './profile-create-without-social-links.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutSocialLinksInput } from './profile-create-or-connect-without-social-links.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutSocialLinksInput {

    @Field(() => ProfileCreateWithoutSocialLinksInput, {nullable:true})
    @Type(() => ProfileCreateWithoutSocialLinksInput)
    create?: ProfileCreateWithoutSocialLinksInput;

    @Field(() => ProfileCreateOrConnectWithoutSocialLinksInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutSocialLinksInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutSocialLinksInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: ProfileWhereUniqueInput;
}
