import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileAvgAggregate } from './profile-avg-aggregate.output';
import { ProfileSumAggregate } from './profile-sum-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';

@ObjectType()
export class ProfileGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    nickName?: string;

    @Field(() => Boolean, {nullable:false})
    showOnlyNickname!: boolean;

    @Field(() => Date, {nullable:false})
    birthday!: Date | string;

    @Field(() => Boolean, {nullable:false})
    hideAge!: boolean;

    @Field(() => String, {nullable:false})
    position!: string;

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProfileCountAggregate, {nullable:true})
    _count?: ProfileCountAggregate;

    @Field(() => ProfileAvgAggregate, {nullable:true})
    _avg?: ProfileAvgAggregate;

    @Field(() => ProfileSumAggregate, {nullable:true})
    _sum?: ProfileSumAggregate;

    @Field(() => ProfileMinAggregate, {nullable:true})
    _min?: ProfileMinAggregate;

    @Field(() => ProfileMaxAggregate, {nullable:true})
    _max?: ProfileMaxAggregate;
}
