import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HouseCountAggregate } from './house-count-aggregate.output';
import { HouseAvgAggregate } from './house-avg-aggregate.output';
import { HouseSumAggregate } from './house-sum-aggregate.output';
import { HouseMinAggregate } from './house-min-aggregate.output';
import { HouseMaxAggregate } from './house-max-aggregate.output';

@ObjectType()
export class HouseGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HouseCountAggregate, {nullable:true})
    _count?: HouseCountAggregate;

    @Field(() => HouseAvgAggregate, {nullable:true})
    _avg?: HouseAvgAggregate;

    @Field(() => HouseSumAggregate, {nullable:true})
    _sum?: HouseSumAggregate;

    @Field(() => HouseMinAggregate, {nullable:true})
    _min?: HouseMinAggregate;

    @Field(() => HouseMaxAggregate, {nullable:true})
    _max?: HouseMaxAggregate;
}
