import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsWhereInput } from '../my-roots/my-roots-where.input';
import { Type } from 'class-transformer';
import { MyRootsOrderByWithAggregationInput } from '../my-roots/my-roots-order-by-with-aggregation.input';
import { MyRootsScalarFieldEnum } from '../my-roots/my-roots-scalar-field.enum';
import { MyRootsScalarWhereWithAggregatesInput } from '../my-roots/my-roots-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByMyRootsArgs {

    @Field(() => MyRootsWhereInput, {nullable:true})
    @Type(() => MyRootsWhereInput)
    where?: MyRootsWhereInput;

    @Field(() => [MyRootsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MyRootsOrderByWithAggregationInput>;

    @Field(() => [MyRootsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MyRootsScalarFieldEnum>;

    @Field(() => MyRootsScalarWhereWithAggregatesInput, {nullable:true})
    having?: MyRootsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
