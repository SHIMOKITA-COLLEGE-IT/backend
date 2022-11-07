import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoCountAggregate } from './photo-count-aggregate.output';
import { PhotoAvgAggregate } from './photo-avg-aggregate.output';
import { PhotoSumAggregate } from './photo-sum-aggregate.output';
import { PhotoMinAggregate } from './photo-min-aggregate.output';
import { PhotoMaxAggregate } from './photo-max-aggregate.output';

@ObjectType()
export class PhotoGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    alt!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PhotoCountAggregate, {nullable:true})
    _count?: PhotoCountAggregate;

    @Field(() => PhotoAvgAggregate, {nullable:true})
    _avg?: PhotoAvgAggregate;

    @Field(() => PhotoSumAggregate, {nullable:true})
    _sum?: PhotoSumAggregate;

    @Field(() => PhotoMinAggregate, {nullable:true})
    _min?: PhotoMinAggregate;

    @Field(() => PhotoMaxAggregate, {nullable:true})
    _max?: PhotoMaxAggregate;
}
