import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSocialLinksInput } from './user-create-without-social-links.input';

@InputType()
export class UserCreateOrConnectWithoutSocialLinksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSocialLinksInput, {nullable:false})
    @Type(() => UserCreateWithoutSocialLinksInput)
    create!: UserCreateWithoutSocialLinksInput;
}
