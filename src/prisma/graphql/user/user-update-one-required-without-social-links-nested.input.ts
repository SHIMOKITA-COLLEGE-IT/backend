import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSocialLinksInput } from './user-create-without-social-links.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSocialLinksInput } from './user-create-or-connect-without-social-links.input';
import { UserUpsertWithoutSocialLinksInput } from './user-upsert-without-social-links.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSocialLinksInput } from './user-update-without-social-links.input';

@InputType()
export class UserUpdateOneRequiredWithoutSocialLinksNestedInput {

    @Field(() => UserCreateWithoutSocialLinksInput, {nullable:true})
    @Type(() => UserCreateWithoutSocialLinksInput)
    create?: UserCreateWithoutSocialLinksInput;

    @Field(() => UserCreateOrConnectWithoutSocialLinksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSocialLinksInput)
    connectOrCreate?: UserCreateOrConnectWithoutSocialLinksInput;

    @Field(() => UserUpsertWithoutSocialLinksInput, {nullable:true})
    @Type(() => UserUpsertWithoutSocialLinksInput)
    upsert?: UserUpsertWithoutSocialLinksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSocialLinksInput, {nullable:true})
    @Type(() => UserUpdateWithoutSocialLinksInput)
    update?: UserUpdateWithoutSocialLinksInput;
}
