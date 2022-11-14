import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SocialLinkType } from '../prisma/social-link-type.enum';
import { SocialLinkCountAggregate } from './social-link-count-aggregate.output';
import { SocialLinkAvgAggregate } from './social-link-avg-aggregate.output';
import { SocialLinkSumAggregate } from './social-link-sum-aggregate.output';
import { SocialLinkMinAggregate } from './social-link-min-aggregate.output';
import { SocialLinkMaxAggregate } from './social-link-max-aggregate.output';

@ObjectType()
export class SocialLinkGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SocialLinkType, {nullable:true})
    socialLinkType?: keyof typeof SocialLinkType;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => SocialLinkCountAggregate, {nullable:true})
    _count?: SocialLinkCountAggregate;

    @Field(() => SocialLinkAvgAggregate, {nullable:true})
    _avg?: SocialLinkAvgAggregate;

    @Field(() => SocialLinkSumAggregate, {nullable:true})
    _sum?: SocialLinkSumAggregate;

    @Field(() => SocialLinkMinAggregate, {nullable:true})
    _min?: SocialLinkMinAggregate;

    @Field(() => SocialLinkMaxAggregate, {nullable:true})
    _max?: SocialLinkMaxAggregate;
}
