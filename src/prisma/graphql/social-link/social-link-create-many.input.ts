import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SocialLinkType } from '../prisma/social-link-type.enum';

@InputType()
export class SocialLinkCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SocialLinkType, {nullable:false})
    socialLinkType!: keyof typeof SocialLinkType;

    @Field(() => String, {nullable:false})
    url!: string;
}
