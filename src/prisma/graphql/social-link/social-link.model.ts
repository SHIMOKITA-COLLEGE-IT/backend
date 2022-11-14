import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { SocialLinkType } from '../prisma/social-link-type.enum';

@ObjectType()
export class SocialLink {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SocialLinkType, {nullable:true})
    socialLinkType!: keyof typeof SocialLinkType | null;

    @Field(() => String, {nullable:false})
    url!: string;
}
