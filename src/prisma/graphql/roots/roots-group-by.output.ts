import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RootsType } from '../prisma/roots-type.enum';
import { RootsCountAggregate } from './roots-count-aggregate.output';
import { RootsAvgAggregate } from './roots-avg-aggregate.output';
import { RootsSumAggregate } from './roots-sum-aggregate.output';
import { RootsMinAggregate } from './roots-min-aggregate.output';
import { RootsMaxAggregate } from './roots-max-aggregate.output';

@ObjectType()
export class RootsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RootsType, {nullable:false})
    rootsType!: keyof typeof RootsType;

    @Field(() => String, {nullable:true})
    googleMapUrl?: string;

    @Field(() => String, {nullable:true})
    introductionUrl?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RootsCountAggregate, {nullable:true})
    _count?: RootsCountAggregate;

    @Field(() => RootsAvgAggregate, {nullable:true})
    _avg?: RootsAvgAggregate;

    @Field(() => RootsSumAggregate, {nullable:true})
    _sum?: RootsSumAggregate;

    @Field(() => RootsMinAggregate, {nullable:true})
    _min?: RootsMinAggregate;

    @Field(() => RootsMaxAggregate, {nullable:true})
    _max?: RootsMaxAggregate;
}
