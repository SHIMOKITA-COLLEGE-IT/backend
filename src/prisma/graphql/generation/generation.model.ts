import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GenerationType } from '../prisma/generation-type.enum';
import { User } from '../user/user.model';
import { GenerationCount } from './generation-count.output';

@ObjectType()
export class Generation {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => GenerationType, {nullable:false})
    generationType!: keyof typeof GenerationType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    from!: Date;

    @Field(() => Date, {nullable:false})
    to!: Date;

    @Field(() => String, {nullable:true})
    emoji!: string | null;

    @Field(() => String, {nullable:true})
    imageUrl!: string | null;

    @Field(() => String, {nullable:true})
    hexColor!: string | null;

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

    @Field(() => GenerationCount, {nullable:false})
    _count?: GenerationCount;
}
