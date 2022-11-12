import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereInput } from './user-skill-acquisition-where.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionOrderByWithRelationInput } from './user-skill-acquisition-order-by-with-relation.input';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserSkillAcquisitionCountAggregateInput } from './user-skill-acquisition-count-aggregate.input';
import { UserSkillAcquisitionAvgAggregateInput } from './user-skill-acquisition-avg-aggregate.input';
import { UserSkillAcquisitionSumAggregateInput } from './user-skill-acquisition-sum-aggregate.input';
import { UserSkillAcquisitionMinAggregateInput } from './user-skill-acquisition-min-aggregate.input';
import { UserSkillAcquisitionMaxAggregateInput } from './user-skill-acquisition-max-aggregate.input';

@ArgsType()
export class UserSkillAcquisitionAggregateArgs {

    @Field(() => UserSkillAcquisitionWhereInput, {nullable:true})
    @Type(() => UserSkillAcquisitionWhereInput)
    where?: UserSkillAcquisitionWhereInput;

    @Field(() => [UserSkillAcquisitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserSkillAcquisitionOrderByWithRelationInput>;

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:true})
    cursor?: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserSkillAcquisitionCountAggregateInput, {nullable:true})
    _count?: UserSkillAcquisitionCountAggregateInput;

    @Field(() => UserSkillAcquisitionAvgAggregateInput, {nullable:true})
    _avg?: UserSkillAcquisitionAvgAggregateInput;

    @Field(() => UserSkillAcquisitionSumAggregateInput, {nullable:true})
    _sum?: UserSkillAcquisitionSumAggregateInput;

    @Field(() => UserSkillAcquisitionMinAggregateInput, {nullable:true})
    _min?: UserSkillAcquisitionMinAggregateInput;

    @Field(() => UserSkillAcquisitionMaxAggregateInput, {nullable:true})
    _max?: UserSkillAcquisitionMaxAggregateInput;
}
