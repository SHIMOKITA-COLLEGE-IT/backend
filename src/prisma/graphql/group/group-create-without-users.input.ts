import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import * as Validator from 'class-validator';
import { GroupCreatephotoUrlsInput } from './group-createphoto-urls.input';

@InputType()
export class GroupCreateWithoutUsersInput {

    @Field(() => GroupType, {nullable:false})
    groupType!: keyof typeof GroupType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    emoji?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GroupCreatephotoUrlsInput, {nullable:true})
    photoUrls?: GroupCreatephotoUrlsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
