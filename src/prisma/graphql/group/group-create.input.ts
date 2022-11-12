import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import { GroupCreatephotoUrlsInput } from './group-createphoto-urls.input';
import { UserCreateNestedManyWithoutGroupsInput } from '../user/user-create-nested-many-without-groups.input';

@InputType()
export class GroupCreateInput {

    @Field(() => GroupType, {nullable:false})
    groupType!: keyof typeof GroupType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => String, {nullable:true})
    emoji?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GroupCreatephotoUrlsInput, {nullable:true})
    photoUrls?: GroupCreatephotoUrlsInput;

    @Field(() => UserCreateNestedManyWithoutGroupsInput, {nullable:true})
    users?: UserCreateNestedManyWithoutGroupsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}