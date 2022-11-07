import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SocialLinkType } from '../prisma/social-link-type.enum';

@ObjectType()
export class SocialLinkMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    profileId?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => SocialLinkType, {nullable:true})
    socialLinkType?: keyof typeof SocialLinkType;

    @Field(() => String, {nullable:true})
    url?: string;
}
