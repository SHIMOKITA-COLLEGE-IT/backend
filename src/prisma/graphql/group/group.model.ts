import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import { User } from '../user/user.model';
import { GroupCount } from './group-count.output';

@ObjectType()
export class Group {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => GroupType, {nullable:false})
    groupType!: keyof typeof GroupType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    emoji!: string | null;

    @Field(() => String, {nullable:true})
    imageUrl!: string | null;

    @Field(() => String, {nullable:true})
    slackChannel!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [String], {nullable:true})
    photoUrls!: Array<string>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => GroupCount, {nullable:false})
    _count?: GroupCount;
}
