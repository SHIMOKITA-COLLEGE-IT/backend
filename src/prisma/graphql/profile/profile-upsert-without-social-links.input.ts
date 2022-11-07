import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutSocialLinksInput } from './profile-update-without-social-links.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutSocialLinksInput } from './profile-create-without-social-links.input';

@InputType()
export class ProfileUpsertWithoutSocialLinksInput {

    @Field(() => ProfileUpdateWithoutSocialLinksInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutSocialLinksInput)
    update!: ProfileUpdateWithoutSocialLinksInput;

    @Field(() => ProfileCreateWithoutSocialLinksInput, {nullable:false})
    @Type(() => ProfileCreateWithoutSocialLinksInput)
    create!: ProfileCreateWithoutSocialLinksInput;
}
