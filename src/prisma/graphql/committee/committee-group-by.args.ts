import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeWhereInput } from './committee-where.input';
import { Type } from 'class-transformer';
import { CommitteeOrderByWithAggregationInput } from './committee-order-by-with-aggregation.input';
import { CommitteeScalarFieldEnum } from './committee-scalar-field.enum';
import { CommitteeScalarWhereWithAggregatesInput } from './committee-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommitteeCountAggregateInput } from './committee-count-aggregate.input';
import { CommitteeAvgAggregateInput } from './committee-avg-aggregate.input';
import { CommitteeSumAggregateInput } from './committee-sum-aggregate.input';
import { CommitteeMinAggregateInput } from './committee-min-aggregate.input';
import { CommitteeMaxAggregateInput } from './committee-max-aggregate.input';

@ArgsType()
export class CommitteeGroupByArgs {

    @Field(() => CommitteeWhereInput, {nullable:true})
    @Type(() => CommitteeWhereInput)
    where?: CommitteeWhereInput;

    @Field(() => [CommitteeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommitteeOrderByWithAggregationInput>;

    @Field(() => [CommitteeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommitteeScalarFieldEnum>;

    @Field(() => CommitteeScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommitteeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommitteeCountAggregateInput, {nullable:true})
    _count?: CommitteeCountAggregateInput;

    @Field(() => CommitteeAvgAggregateInput, {nullable:true})
    _avg?: CommitteeAvgAggregateInput;

    @Field(() => CommitteeSumAggregateInput, {nullable:true})
    _sum?: CommitteeSumAggregateInput;

    @Field(() => CommitteeMinAggregateInput, {nullable:true})
    _min?: CommitteeMinAggregateInput;

    @Field(() => CommitteeMaxAggregateInput, {nullable:true})
    _max?: CommitteeMaxAggregateInput;
}
