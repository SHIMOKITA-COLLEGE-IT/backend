import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationType } from '../prisma/generation-type.enum';
import { GenerationCountAggregate } from './generation-count-aggregate.output';
import { GenerationAvgAggregate } from './generation-avg-aggregate.output';
import { GenerationSumAggregate } from './generation-sum-aggregate.output';
import { GenerationMinAggregate } from './generation-min-aggregate.output';
import { GenerationMaxAggregate } from './generation-max-aggregate.output';

@ObjectType()
export class GenerationGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => GenerationType, {nullable:false})
    generationType!: keyof typeof GenerationType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    from!: Date | string;

    @Field(() => Date, {nullable:false})
    to!: Date | string;

    @Field(() => String, {nullable:true})
    emoji?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    hexColor?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => [String], {nullable:true})
    photoUrls?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => GenerationCountAggregate, {nullable:true})
    _count?: GenerationCountAggregate;

    @Field(() => GenerationAvgAggregate, {nullable:true})
    _avg?: GenerationAvgAggregate;

    @Field(() => GenerationSumAggregate, {nullable:true})
    _sum?: GenerationSumAggregate;

    @Field(() => GenerationMinAggregate, {nullable:true})
    _min?: GenerationMinAggregate;

    @Field(() => GenerationMaxAggregate, {nullable:true})
    _max?: GenerationMaxAggregate;
}
