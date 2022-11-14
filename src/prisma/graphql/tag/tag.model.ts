import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    iconUrl!: string | null;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => TagCount, {nullable:false})
    _count?: TagCount;
}
