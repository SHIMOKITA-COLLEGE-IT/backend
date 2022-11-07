import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereInput } from './shimokita-college-profile-where.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileOrderByWithRelationInput } from './shimokita-college-profile-order-by-with-relation.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCountAggregateInput } from './shimokita-college-profile-count-aggregate.input';
import { ShimokitaCollegeProfileAvgAggregateInput } from './shimokita-college-profile-avg-aggregate.input';
import { ShimokitaCollegeProfileSumAggregateInput } from './shimokita-college-profile-sum-aggregate.input';
import { ShimokitaCollegeProfileMinAggregateInput } from './shimokita-college-profile-min-aggregate.input';
import { ShimokitaCollegeProfileMaxAggregateInput } from './shimokita-college-profile-max-aggregate.input';

@ArgsType()
export class ShimokitaCollegeProfileAggregateArgs {

    @Field(() => ShimokitaCollegeProfileWhereInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereInput)
    where?: ShimokitaCollegeProfileWhereInput;

    @Field(() => [ShimokitaCollegeProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShimokitaCollegeProfileOrderByWithRelationInput>;

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:true})
    cursor?: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShimokitaCollegeProfileCountAggregateInput, {nullable:true})
    _count?: ShimokitaCollegeProfileCountAggregateInput;

    @Field(() => ShimokitaCollegeProfileAvgAggregateInput, {nullable:true})
    _avg?: ShimokitaCollegeProfileAvgAggregateInput;

    @Field(() => ShimokitaCollegeProfileSumAggregateInput, {nullable:true})
    _sum?: ShimokitaCollegeProfileSumAggregateInput;

    @Field(() => ShimokitaCollegeProfileMinAggregateInput, {nullable:true})
    _min?: ShimokitaCollegeProfileMinAggregateInput;

    @Field(() => ShimokitaCollegeProfileMaxAggregateInput, {nullable:true})
    _max?: ShimokitaCollegeProfileMaxAggregateInput;
}
