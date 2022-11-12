import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSocialLinksInput } from './user-create-without-social-links.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSocialLinksInput } from './user-create-or-connect-without-social-links.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSocialLinksInput {

    @Field(() => UserCreateWithoutSocialLinksInput, {nullable:true})
    @Type(() => UserCreateWithoutSocialLinksInput)
    create?: UserCreateWithoutSocialLinksInput;

    @Field(() => UserCreateOrConnectWithoutSocialLinksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSocialLinksInput)
    connectOrCreate?: UserCreateOrConnectWithoutSocialLinksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
