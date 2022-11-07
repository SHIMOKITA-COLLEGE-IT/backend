import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SocialLinkCountAggregate } from './social-link-count-aggregate.output';
import { SocialLinkAvgAggregate } from './social-link-avg-aggregate.output';
import { SocialLinkSumAggregate } from './social-link-sum-aggregate.output';
import { SocialLinkMinAggregate } from './social-link-min-aggregate.output';
import { SocialLinkMaxAggregate } from './social-link-max-aggregate.output';

@ObjectType()
export class AggregateSocialLink {

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
