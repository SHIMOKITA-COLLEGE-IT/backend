import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkWhereInput } from './social-link-where.input';
import { Type } from 'class-transformer';
import { SocialLinkOrderByWithAggregationInput } from './social-link-order-by-with-aggregation.input';
import { SocialLinkScalarFieldEnum } from './social-link-scalar-field.enum';
import { SocialLinkScalarWhereWithAggregatesInput } from './social-link-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SocialLinkCountAggregateInput } from './social-link-count-aggregate.input';
import { SocialLinkAvgAggregateInput } from './social-link-avg-aggregate.input';
import { SocialLinkSumAggregateInput } from './social-link-sum-aggregate.input';
import { SocialLinkMinAggregateInput } from './social-link-min-aggregate.input';
import { SocialLinkMaxAggregateInput } from './social-link-max-aggregate.input';

@ArgsType()
export class SocialLinkGroupByArgs {

    @Field(() => SocialLinkWhereInput, {nullable:true})
    @Type(() => SocialLinkWhereInput)
    where?: SocialLinkWhereInput;

    @Field(() => [SocialLinkOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SocialLinkOrderByWithAggregationInput>;

    @Field(() => [SocialLinkScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SocialLinkScalarFieldEnum>;

    @Field(() => SocialLinkScalarWhereWithAggregatesInput, {nullable:true})
    having?: SocialLinkScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SocialLinkCountAggregateInput, {nullable:true})
    _count?: SocialLinkCountAggregateInput;

    @Field(() => SocialLinkAvgAggregateInput, {nullable:true})
    _avg?: SocialLinkAvgAggregateInput;

    @Field(() => SocialLinkSumAggregateInput, {nullable:true})
    _sum?: SocialLinkSumAggregateInput;

    @Field(() => SocialLinkMinAggregateInput, {nullable:true})
    _min?: SocialLinkMinAggregateInput;

    @Field(() => SocialLinkMaxAggregateInput, {nullable:true})
    _max?: SocialLinkMaxAggregateInput;
}
