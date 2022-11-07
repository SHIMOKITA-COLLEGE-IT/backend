import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutSocialLinksInput } from './profile-create-without-social-links.input';

@InputType()
export class ProfileCreateOrConnectWithoutSocialLinksInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutSocialLinksInput, {nullable:false})
    @Type(() => ProfileCreateWithoutSocialLinksInput)
    create!: ProfileCreateWithoutSocialLinksInput;
}
