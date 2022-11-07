import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Int } from '@nestjs/graphql';
import { SocialLinkType } from '../prisma/social-link-type.enum';

@ObjectType()
export class SocialLink {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Profile, {nullable:false})
    profile?: Profile;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SocialLinkType, {nullable:false})
    socialLinkType!: keyof typeof SocialLinkType;

    @Field(() => String, {nullable:false})
    url!: string;
}
