import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSocialLinksInput } from './user-update-without-social-links.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSocialLinksInput } from './user-create-without-social-links.input';

@InputType()
export class UserUpsertWithoutSocialLinksInput {

    @Field(() => UserUpdateWithoutSocialLinksInput, {nullable:false})
    @Type(() => UserUpdateWithoutSocialLinksInput)
    update!: UserUpdateWithoutSocialLinksInput;

    @Field(() => UserCreateWithoutSocialLinksInput, {nullable:false})
    @Type(() => UserCreateWithoutSocialLinksInput)
    create!: UserCreateWithoutSocialLinksInput;
}
