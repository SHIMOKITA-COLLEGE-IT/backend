import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsWhereInput } from './my-roots-where.input';
import { Type } from 'class-transformer';
import { MyRootsOrderByWithRelationInput } from './my-roots-order-by-with-relation.input';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MyRootsCountAggregateInput } from './my-roots-count-aggregate.input';
import { MyRootsAvgAggregateInput } from './my-roots-avg-aggregate.input';
import { MyRootsSumAggregateInput } from './my-roots-sum-aggregate.input';
import { MyRootsMinAggregateInput } from './my-roots-min-aggregate.input';
import { MyRootsMaxAggregateInput } from './my-roots-max-aggregate.input';

@ArgsType()
export class MyRootsAggregateArgs {

    @Field(() => MyRootsWhereInput, {nullable:true})
    @Type(() => MyRootsWhereInput)
    where?: MyRootsWhereInput;

    @Field(() => [MyRootsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MyRootsOrderByWithRelationInput>;

    @Field(() => MyRootsWhereUniqueInput, {nullable:true})
    cursor?: MyRootsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MyRootsCountAggregateInput, {nullable:true})
    _count?: MyRootsCountAggregateInput;

    @Field(() => MyRootsAvgAggregateInput, {nullable:true})
    _avg?: MyRootsAvgAggregateInput;

    @Field(() => MyRootsSumAggregateInput, {nullable:true})
    _sum?: MyRootsSumAggregateInput;

    @Field(() => MyRootsMinAggregateInput, {nullable:true})
    _min?: MyRootsMinAggregateInput;

    @Field(() => MyRootsMaxAggregateInput, {nullable:true})
    _max?: MyRootsMaxAggregateInput;
}
