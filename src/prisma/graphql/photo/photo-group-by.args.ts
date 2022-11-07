import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotoWhereInput } from './photo-where.input';
import { Type } from 'class-transformer';
import { PhotoOrderByWithAggregationInput } from './photo-order-by-with-aggregation.input';
import { PhotoScalarFieldEnum } from './photo-scalar-field.enum';
import { PhotoScalarWhereWithAggregatesInput } from './photo-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PhotoCountAggregateInput } from './photo-count-aggregate.input';
import { PhotoAvgAggregateInput } from './photo-avg-aggregate.input';
import { PhotoSumAggregateInput } from './photo-sum-aggregate.input';
import { PhotoMinAggregateInput } from './photo-min-aggregate.input';
import { PhotoMaxAggregateInput } from './photo-max-aggregate.input';

@ArgsType()
export class PhotoGroupByArgs {

    @Field(() => PhotoWhereInput, {nullable:true})
    @Type(() => PhotoWhereInput)
    where?: PhotoWhereInput;

    @Field(() => [PhotoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PhotoOrderByWithAggregationInput>;

    @Field(() => [PhotoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PhotoScalarFieldEnum>;

    @Field(() => PhotoScalarWhereWithAggregatesInput, {nullable:true})
    having?: PhotoScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PhotoCountAggregateInput, {nullable:true})
    _count?: PhotoCountAggregateInput;

    @Field(() => PhotoAvgAggregateInput, {nullable:true})
    _avg?: PhotoAvgAggregateInput;

    @Field(() => PhotoSumAggregateInput, {nullable:true})
    _sum?: PhotoSumAggregateInput;

    @Field(() => PhotoMinAggregateInput, {nullable:true})
    _min?: PhotoMinAggregateInput;

    @Field(() => PhotoMaxAggregateInput, {nullable:true})
    _max?: PhotoMaxAggregateInput;
}
